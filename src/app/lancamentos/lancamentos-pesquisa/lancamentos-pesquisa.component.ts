import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';

import { ConfirmationService, LazyLoadEvent } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.scss']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(public auth: AuthService,
              private lancamentoService: LancamentoService,
              private toasty: ToastyService,
              private confirmation: ConfirmationService,
              private errorHandle: ErrorHandlerService,
              private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Pesquisa de lançamento');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.toasty.success('Lançamento excluído com sucesso!');
      })
      .catch(erro => this.errorHandle.handle(erro));
  }

}

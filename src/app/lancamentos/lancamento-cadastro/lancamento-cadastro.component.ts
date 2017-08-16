import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { CategoriaService } from '../../categorias/categoria.service';
import { PessoaService } from '../../pessoas/pessoa.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { LancamentoService } from '../lancamento.service';
import { Lancamento } from '../../core/model';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.scss']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();

  constructor(private categoriaService: CategoriaService,
              private pessoaService: PessoaService,
              private lancamentoService: LancamentoService,
              private toasty: ToastyService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  salvar(form: FormControl) {
    console.log(form);
    this.lancamentoService.adicionar(this.lancamento)
      .then(lacamento => {
        this.toasty.success('Lançamento adicionando com sucesso!');

        form.reset();
        this.lancamento = new Lancamento();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  private carregarCategorias() {
    this.categoriaService.listarTodas()
      .then(categorias => this.categorias = categorias.map(c => ({ label: c.nome, value: c.codigo })))
      .catch(erro => this.errorHandler.handle(erro));
  }

  private carregarPessoas() {
    this.pessoaService.listarTodas()
      .then(pessoas => this.pessoas = pessoas.map(p => ({ label: p.nome, value: p.codigo })))
      .catch(erro => this.errorHandler.handle(erro));
  }

}

import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
              private errorHandler: ErrorHandlerService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title) { }

  ngOnInit() {
    const codigoLancamento = this.route.snapshot.params['codigo'];

    if (codigoLancamento) {
      this.carregarLancamento(codigoLancamento);
    } else {
      this.title.setTitle('Novo Lançamento');
    }

    this.carregarCategorias();
    this.carregarPessoas();
  }

  get editando(): boolean {
    return Boolean(this.lancamento.codigo);
  }

  novo(form: FormControl) {
    form.reset();

    setTimeout(function () {
      this.lancamento = new Lancamento();
    }.bind(this), 1);

    this.router.navigate(['lancamentos/novo']);
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarLancamento(form);
    } else {
      this.adicionarLancamento(form);
    }
  }

  private adicionarLancamento(form: FormControl) {
    this.lancamentoService.adicionar(this.lancamento)
      .then(lancamento => {
        this.toasty.success('Lançamento adicionando com sucesso!');

        this.router.navigate(['/lancamentos', lancamento.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  private atualizarLancamento(form: FormControl) {
    this.lancamentoService.atualizar(this.lancamento)
      .then(lacamento => {
        this.lancamento = lacamento;
        this.atualizarTituloEdicao();

        this.toasty.success('Lançamento alterado com sucesso!');
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

  private carregarLancamento(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  private atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lançamento: ${this.lancamento.descricao}`);
  }
}

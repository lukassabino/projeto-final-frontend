import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';
import { FornecedorService } from '../services/fornecedor.service';
import { ActivatedRoute } from '@angular/router';
import { fornecedorDTO } from '../dto/fornecedor-dto';
import { Observable, of } from 'rxjs';
import { map, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  formularioProduto: FormGroup;
  fornecedoresFiltrados: Observable<fornecedorDTO[]>;
  fornecedores: fornecedorDTO[];

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private fornecedorService: FornecedorService
  ) { }

  ngOnInit() {
    this.formularioProduto = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      preco: [null],
      codigoBarras: [null],
      fornecedor: [null],
      qtd: [null]
    });

    this.activatedRoute.params
    .pipe(
      map(params => params.id),
      switchMap(id =>  this.produtoService.buscarPorId(id))
    ).subscribe(cliente => this.updateFormulario(cliente));
  }

  onSubmit() {
    console.log('form', this.formularioProduto);

    if (this.formularioProduto.valid) {
      if (this.formularioProduto.get('id').value) {
        this.produtoService.atualizar(this.formularioProduto.value).subscribe(() => {
          console.log('atualizou');
        });
      } else {
        this.produtoService.cadastrar(this.formularioProduto.value).subscribe(() => {
          console.log('criou');
        });
      }
    }

  }

  updateFormulario(produto) {
    this.formularioProduto.patchValue({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      codigoBarras: produto.codigoBarras,
      fornecedor: produto.fornecedor,
      qtd: produto.qtd
    });
  }

  private adicionaPesquisaFornecedor() {
    this.formularioProduto.get('fornecedor').valueChanges
      .pipe(
        debounceTime(3),
        distinctUntilChanged()
      ).subscribe(v => {
        if (typeof v === 'string') {
          this.fornecedoresFiltrados = of(v)
            .pipe(
              map(value => this.filter(value))
            );
        } else {
          this.fornecedoresFiltrados = of([]);
        }
      });
  }

  private filter(value: string): fornecedorDTO[] {
    this.fornecedorService.buscarPorNomeOuId(value).subscribe(data => {
      this.fornecedores = data;
    });

    return this.fornecedores;
  }

  formatter(fornecedor?: fornecedorDTO): string | undefined {
    return fornecedor ? fornecedor.nome : undefined;
  }

}

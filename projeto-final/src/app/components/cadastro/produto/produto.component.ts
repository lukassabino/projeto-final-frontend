import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  formularioProduto: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formularioProduto = this.formBuilder.group({
      id: [null],
      codigoBarras: [null, Validators.required],
      nome: [null, Validators.required],
      preco: [null, Validators.required],
      razaoSocial: [null, Validators.required],
      qtd: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log('form', this.formularioProduto);
    console.log('nome', this.formularioProduto.get('nome').value);

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

  listaProduto() {
  }
  editaProduto() {
  }
  excluiProduto() {
  }

}

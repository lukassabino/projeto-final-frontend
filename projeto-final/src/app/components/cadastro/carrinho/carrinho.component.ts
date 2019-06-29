import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  menus = [
    {link: 'cliente', descricao: 'Cadastro de Cliente'},
    {link: 'farmaceutico', descricao: 'Cadastro de Farmacêutico'},
    {link: 'fornecedor', descricao: 'Cadastro de Fornecedor'},
    {link: 'produto', descricao: 'Cadastro de Produto'}
  ];

  formulario: FormGroup;

  carrinho = [
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      quantidade: [null]
    });
  }

  finalizarCompra() {

  }

  quantidade() {
    console.log('works');
  }

  remover() {

  }

}

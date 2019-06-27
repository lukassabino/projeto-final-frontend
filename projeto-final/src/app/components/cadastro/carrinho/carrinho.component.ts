import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

}

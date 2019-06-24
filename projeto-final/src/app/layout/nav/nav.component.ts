import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['../../../assets/principal/nav-style.scss']
})
export class NavComponent implements OnInit {

  menus = [
    // {link: 'home', descricao: 'Home'},
    {link: 'cliente', descricao: 'Cadastro de Cliente'},
    {link: 'farmaceutico', descricao: 'Cadastro de Farmacêutico'},
    {link: 'fornecedor', descricao: 'Cadastro de Fornecedor'},
    {link: 'produto', descricao: 'Cadastro de Produto'}
  ];


  constructor() { }

  ngOnInit() {
  }

}

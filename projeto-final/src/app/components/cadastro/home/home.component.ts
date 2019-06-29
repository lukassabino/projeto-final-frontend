import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos: any;



  constructor(
    private produtoService: ProdutoService
  ) { }


  buscarTodos() {
      this.produtoService.buscarTodos().subscribe(dados => this.produtos = dados);
      console.log(this.produtos);
    }

  ngOnInit() {
    this.buscarTodos();
  }

  adicionaCarrinho() {
    console.log('Produto adicionado com sucesso!');
  }

}

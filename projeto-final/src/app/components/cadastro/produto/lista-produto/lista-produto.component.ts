import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit, OnDestroy {

  subs: Subscription;
  produtos: any;
  displayedColumns: string[] = ['id', 'nome', 'action'];

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.buscarProdutos();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.produtos.filter = filterValue.trim().toLowerCase();
  }

  deletar(id: number) {
    this.produtoService.deletar(id).subscribe(() => {
      console.log('removeu');
      this.buscarProdutos();
    });
  }

  private buscarProdutos() {
    this.subs = this.produtoService.buscarTodos().subscribe(data => {
      console.log(data);
      this.produtos = new MatTableDataSource(data);
    });
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FornecedorService } from '../../services/fornecedor.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-fornecedor',
  templateUrl: './lista-fornecedor.component.html',
  styleUrls: ['./lista-fornecedor.component.scss']
})
export class ListaFornecedorComponent implements OnInit, OnDestroy {

  subs: Subscription;
  fornecedores: any;
  displayedColumns: string[] = ['id', 'nome', 'action'];

  constructor(
    private fornecedorService: FornecedorService
  ) { }

  ngOnInit() {
    this.buscarFornecedores();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.fornecedores.filter = filterValue.trim().toLowerCase();
  }

  deletar(id: number) {
    this.fornecedorService.deletar(id).subscribe(() => {
      console.log('removeu');
      this.buscarFornecedores();
    });
  }

  private buscarFornecedores() {
    this.subs = this.fornecedorService.buscarTodos().subscribe(data => {
      console.log(data);
      this.fornecedores = new MatTableDataSource(data);
    });
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit, OnDestroy {

  subs: Subscription;
  clientes: any;
  displayedColumns: string[] = ['id', 'nome', 'action'];

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.buscarClientes();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.clientes.filter = filterValue.trim().toLowerCase();
  }

  deletar(id: number) {
    this.clienteService.deletar(id).subscribe(() => {
      console.log('removeu');
      this.buscarClientes();
    });
  }

  private buscarClientes() {
    this.subs = this.clienteService.buscarTodos().subscribe(data => {
      console.log(data);
      this.clientes = new MatTableDataSource(data);
    });
  }

}

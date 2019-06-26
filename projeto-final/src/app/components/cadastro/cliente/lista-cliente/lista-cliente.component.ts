import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  clientes: any;
  displayedColumns: string[] = ['id', 'nome', 'action'];

  constructor() { }

  ngOnInit() {
    // this.buscarClientes();
  }
}

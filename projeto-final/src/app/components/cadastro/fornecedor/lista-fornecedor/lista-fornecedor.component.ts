import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-fornecedor',
  templateUrl: './lista-fornecedor.component.html',
  styleUrls: ['./lista-fornecedor.component.scss']
})
export class ListaFornecedorComponent implements OnInit {

  fornecedores: any;
  displayedColumns: string[] = ['id', 'nome', 'action'];

  constructor() { }

  ngOnInit() {
    // this.buscarClientes();
  }
}

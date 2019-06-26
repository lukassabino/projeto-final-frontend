import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-farmaceutico',
  templateUrl: './lista-farmaceutico.component.html',
  styleUrls: ['./lista-farmaceutico.component.scss']
})
export class ListaFarmaceuticoComponent implements OnInit {


  farmaceuticos: any;
  displayedColumns: string[] = ['id', 'nome', 'action'];

  constructor() { }

  ngOnInit() {
    // this.buscarClientes();
  }
}

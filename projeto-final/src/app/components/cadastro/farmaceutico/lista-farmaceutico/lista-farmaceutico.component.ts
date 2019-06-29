import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FarmaceuticoService } from '../../services/farmaceutico.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-farmaceutico',
  templateUrl: './lista-farmaceutico.component.html',
  styleUrls: ['./lista-farmaceutico.component.scss']
})
export class ListaFarmaceuticoComponent implements OnInit, OnDestroy {

  subs: Subscription;
  farmaceuticos: any;
  displayedColumns: string[] = ['id', 'nome', 'action'];

  constructor(
    private farmaceuticoService: FarmaceuticoService
  ) { }

  ngOnInit() {
    this.buscarFarmaceuticos();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.farmaceuticos.filter = filterValue.trim().toLowerCase();
  }

  deletar(id: number) {
    this.farmaceuticoService.deletar(id).subscribe(() => {
      console.log('removeu');
      this.buscarFarmaceuticos();
    });
  }

  private buscarFarmaceuticos() {
    this.subs = this.farmaceuticoService.buscarTodos().subscribe(data => {
      console.log(data);
      this.farmaceuticos = new MatTableDataSource(data);
    });
  }

}

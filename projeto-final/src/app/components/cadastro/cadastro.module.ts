import { ClienteComponent } from './cliente/cliente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { FarmaceuticoComponent } from './farmaceutico/farmaceutico.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ProdutoComponent } from './produto/produto.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { ListaFarmaceuticoComponent } from './farmaceutico/lista-farmaceutico/lista-farmaceutico.component';
import { ListaFornecedorComponent } from './fornecedor/lista-fornecedor/lista-fornecedor.component';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [FarmaceuticoComponent, FornecedorComponent, ProdutoComponent, ClienteComponent, HomeComponent, ListaClienteComponent,
     ListaFarmaceuticoComponent, ListaFornecedorComponent, ListaProdutoComponent, CarrinhoComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class CadastroModule { }

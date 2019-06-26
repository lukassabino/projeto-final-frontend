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


@NgModule({
  declarations: [FarmaceuticoComponent, FornecedorComponent, ProdutoComponent, ClienteComponent, HomeComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class CadastroModule { }

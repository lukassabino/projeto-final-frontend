import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { FarmaceuticoComponent } from './farmaceutico/farmaceutico.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [FarmaceuticoComponent, FornecedorComponent, ProdutoComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }

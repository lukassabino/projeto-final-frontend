import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './components/cadastro/cliente/cliente.component';
import { ProdutoComponent } from './components/cadastro/produto/produto.component';
import { FornecedorComponent } from './components/cadastro/fornecedor/fornecedor.component';
import { FarmaceuticoComponent } from './components/cadastro/farmaceutico/farmaceutico.component';
import { ContainerComponent } from './layout/container/container.component';



const routes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'farmaceutico', component: FarmaceuticoComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'fornecedor', component: FornecedorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



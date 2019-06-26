import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FarmaceuticoComponent } from './farmaceutico/farmaceutico.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cliente', component: ClienteComponent},
    {path: 'farmaceutico', component: FarmaceuticoComponent},
    {path: 'fornecedor', component: FornecedorComponent},
    {path: 'produto', component: ProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }

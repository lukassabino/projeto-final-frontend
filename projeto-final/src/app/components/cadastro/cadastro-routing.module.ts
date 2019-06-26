import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { ListaFornecedorComponent } from './fornecedor/lista-fornecedor/lista-fornecedor.component';
import { ListaFarmaceuticoComponent } from './farmaceutico/lista-farmaceutico/lista-farmaceutico.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FarmaceuticoComponent } from './farmaceutico/farmaceutico.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'farmaceutico', component: FarmaceuticoComponent},
    {path: 'fornecedor', component: FornecedorComponent},
    {path: 'produto', component: ProdutoComponent},
    {path: 'cliente', component: ClienteComponent},
    {path: 'cliente/listacli', component: ListaClienteComponent},
    {path: 'farmaceutico/listafarma', component: ListaFarmaceuticoComponent},
    {path: 'fornecedor/listaforne', component: ListaFornecedorComponent},
    {path: 'produto/listaprodu', component: ListaProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }

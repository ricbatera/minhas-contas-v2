import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntradasComponent } from './entradas/entradas.component';
import { SaidasComponent } from './saidas/saidas.component';
import { SistemaComponent } from './sistema.component';

const routes: Routes = [
  {path:'', component: SistemaComponent, children:[ 
    {path:'cadastros', component: CadastrosComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'saidas', component: SaidasComponent},
    {path:'entradas', component: EntradasComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }

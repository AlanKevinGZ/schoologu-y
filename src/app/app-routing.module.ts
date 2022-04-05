import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './acceso/login/login.component';
import { RecuperarComponent } from './acceso/recuperar/recuperar.component';
import { RegistroComponent } from './acceso/registro/registro.component';
import { InicioComponent } from './homepage/inicio/inicio.component';



const routes: Routes = [
  {path:'',component:InicioComponent },
  {path:'login',component: LoginComponent},
  {path:'registro',component: RegistroComponent},
  {path:'recovery',component: RecuperarComponent},
  
  { path: 'nomina', loadChildren:()=>import('./nomina/nomina.module').then(m=>m.NominaModule) },

  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { Producto1Component } from './producto1/producto1.component';
import { Producto2Component } from './producto2/producto2.component';


@NgModule({
  declarations: [
    ProductosComponent,
    Producto1Component,
    Producto2Component
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule
  ]
})
export class GaleriaModule { }

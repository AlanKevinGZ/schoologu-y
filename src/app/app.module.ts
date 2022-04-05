import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccesoModule } from './acceso/acceso.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NominaModule } from './nomina/nomina.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NominaModule,
    AccesoModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

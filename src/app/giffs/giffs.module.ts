import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiffsPageComponent } from './giffs-page/giffs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GiffsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
  ],

  exports:  [
    GiffsPageComponent
  ],
  
  imports: [
    CommonModule
  ]
})
export class GiffsModule { }

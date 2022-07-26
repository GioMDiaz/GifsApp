import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiffsService } from '../services/giffs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})

export class BusquedaComponent {

 @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

 constructor(private giffsService: GiffsService){}

 buscar (){
 
  const valor = this.txtBuscar.nativeElement.value;

 this.giffsService.buscarGiffs(valor)
 
 this.txtBuscar.nativeElement.value= '';
 }
}

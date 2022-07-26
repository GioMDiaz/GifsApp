import { Component } from '@angular/core';
import { GiffsService } from 'src/app/giffs/services/giffs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
})
export class SidebarComponent {

get historial(){
  return this.giffsService.historial
}

constructor( private giffsService: GiffsService) { }

buscar( termino: string ){
  this.giffsService.buscarGiffs( termino )
    }
}

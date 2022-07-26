import { Component } from '@angular/core';
import { GiffsService } from '../services/giffs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})

export class ResultadosComponent {

  get resultados() {
    return this.giffService.resultados
  }
  constructor( private giffService: GiffsService) { 

    }
  }




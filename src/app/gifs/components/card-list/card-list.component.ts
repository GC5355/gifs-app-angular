import { Component, Input } from '@angular/core';

import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})

export class CardListComponent {

  // El @Inpu() es para recibir info desde afuera, en este caso de su padre que es home-page-component
  @Input()
  public gifs: Gif[]= []

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  // -------- Cuando le doy a la tecla enter se dispara el searchTag
  template: `
  <h5>Buscar: </h5>
  <input
    type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >`,
})

export class SearchBoxComponent {

  // -------- Se obtiene la referencia del html
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService ) { }

  searchTag(){
    const newTag= this.tagInput.nativeElement.value ;

    this.gifsService.searchTag(newTag) ;
    this.tagInput.nativeElement.value = '';  // Resetea el input al pulsar enter
  }

}

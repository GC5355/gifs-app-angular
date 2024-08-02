import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = []

  private _tagsHistory: string[] = []
  private apiKey: string = 'uj87ZjEtvjv70Ph50Bd1TYjYngGvEmUy'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) {
    this.loadLocarStorage();


   }

  get tagHistory() {
    return this._tagsHistory;
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocarStorage(): void {
    if (!localStorage.getItem('history')) return
    this._tagsHistory = JSON.parse(localStorage.getItem('history')! );

    if(this._tagsHistory.length > 0) {
      this.searchTag(this._tagsHistory[0])
    }
  }


  // Organiza los tags, para que no se repitan en la lista
  organizeHistory(tag: string): void {
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10)
    this.saveLocalStorage();
  }


  searchTag(tag: string): void {
    if (tag.length === 0) return
    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params }) // al lado del params puedo agregar los headers tambien
      .subscribe(resp => {
        this.gifList = resp.data;
        //   console.log({gifs: this.gifList});


      })

  }

// prueba segundo commit
}

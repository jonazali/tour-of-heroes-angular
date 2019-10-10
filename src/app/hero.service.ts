import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  apiUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json';


  constructor(private _http: HttpClient) { }

  getHeroes() {
    return this._http.get<Hero[]>(this.apiUrl);

    // let arrayTemp: { id: number, name: string }[] = this._http.get<Hero[]>(this.apiUrl);

    // TODO: Assign Array, pull only batman references from array, return array of batman characters
    // let tempArray: Hero[] = this._http.get<Hero[]>(this.apiUrl);
    // for (let hero of tempArray) {
    //   if(hero.name === "batman"){
    //     return hero;
    //   }
    // }
  }
}

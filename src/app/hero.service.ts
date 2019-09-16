import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  apiUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json';
  constructor(private _http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this.apiUrl);
  }
}

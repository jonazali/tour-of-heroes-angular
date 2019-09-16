import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes$: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    return this.heroService.getHeroes()
    .subscribe(data => this.heroes$ = data);
  }

  title = 'Batman Heroes and Villains!';
}

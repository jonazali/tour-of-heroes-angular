import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes$: Hero[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getUsers()
    .subscribe(data => this.heroes$ = data);
  }

  title = 'Batman Heroes and Villains!';
}

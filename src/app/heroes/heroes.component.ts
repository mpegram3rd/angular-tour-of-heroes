import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',   // CSS element selector
  templateUrl: './heroes.component.html',   // View template
  styleUrls: ['./heroes.component.css']  // Stylin'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  // Called after creating the component
  // Good place to initialize the component
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}

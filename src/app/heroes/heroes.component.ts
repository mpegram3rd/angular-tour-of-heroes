import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service'
import { MessageService } from "../message.service";

@Component({
  selector: 'app-heroes',   // CSS element selector
  templateUrl: './heroes.component.html',   // View template
  styleUrls: ['./heroes.component.css']  // Stylin'
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
              private messageService: MessageService) {}

  // Called after creating the component
  // Good place to initialize the component
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // notify when a hero is selected.
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}

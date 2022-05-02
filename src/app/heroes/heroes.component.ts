import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',   // CSS element selector
  templateUrl: './heroes.component.html',   // View template
  styleUrls: ['./heroes.component.css']  // Stylin'
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  // Called after creating the component
  // Good place to initialize the component
  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

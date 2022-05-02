import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',   // CSS element selector
  templateUrl: './heroes.component.html',   // View template
  styleUrls: ['./heroes.component.css']  // Stylin'
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  // Called after creating the component
  // Good place to initialize the component
  ngOnInit(): void {
  }

}

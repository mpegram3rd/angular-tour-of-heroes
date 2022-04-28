import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',   // CSS element selector
  templateUrl: './heroes.component.html',   // View template
  styleUrls: ['./heroes.component.css']  // Stylin'
})
export class HeroesComponent implements OnInit {

  constructor() { }

  // Called after creating the component
  // Good place to initialize the component
  ngOnInit(): void {
  }

}

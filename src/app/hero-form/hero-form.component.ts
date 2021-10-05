import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  myHero= new Hero(42,'Sett',this.powers[2],'Coolest guy');
  //console.log(`My hero is called ${myHero.name`); // "My hero is called SkyDog"

  newHero(){
    this.model= new Hero(42, '','');
  }

}
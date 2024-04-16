import { Component } from '@angular/core';
import { pgCard } from './pg.model';

@Component({
  selector: 'app-pgbox',
  templateUrl: './pgbox.component.html',
  styleUrls: ['./pgbox.component.css']
})
export class PGboxComponent {
  characters: pgCard[];
  constructor() {
    this.characters = [
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio'),
      new pgCard('Yukari Takeba', 'assets/images/yukari.png', 'assets/images/yukari.png', 'Un grande personaggio')
    ]
  }
}

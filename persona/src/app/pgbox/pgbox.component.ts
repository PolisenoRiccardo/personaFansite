import { Component } from '@angular/core';
import { pgCard } from './pg.model';

@Component({
  selector: 'app-pgbox',
  templateUrl: './pgbox.component.html',
  styleUrls: ['./pgbox.component.css']
})
export class PGboxComponent {
  characters: pgCard[];
  character: pgCard = new pgCard('Futaba', 'assets/images/futaba.png', 'assets/images/futaba.png', 
  'Davvero una grande');

  addItem(newItem: pgCard) {
    this.character = newItem;
  }

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

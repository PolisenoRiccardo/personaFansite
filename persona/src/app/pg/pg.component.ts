import { Component, Input, Output, EventEmitter } from '@angular/core';
import { pgCard } from '../pgbox/pg.model';

@Component({
  selector: 'app-pg',
  templateUrl: './pg.component.html',
  styleUrls: ['./pg.component.css']
})
export class PgComponent {
  @Output() newItemEvent = new EventEmitter<pgCard>();
  @Input() pg!: pgCard;
  ombra: boolean = false; 

  ombrain() {
    this.ombra = true;
  }

  ombraout() {
    this.ombra = false;
  }

  addNewItem() {
    this.newItemEvent.emit(this.pg);
  }

}

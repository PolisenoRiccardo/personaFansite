import { Component, HostBinding, Input } from '@angular/core';
import { pgCard } from '../pgbox/pg.model';

@Component({
  selector: 'app-pg',
  templateUrl: './pg.component.html',
  styleUrls: ['./pg.component.css']
})
export class PgComponent {
  @Input() pg!: pgCard;
  ombra: string = ''; 

  ombrain() {
    this.ombra = 'shadow';
  }

  ombraout() {
    this.ombra = '';
  }

}

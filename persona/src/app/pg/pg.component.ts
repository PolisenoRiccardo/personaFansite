import { Component, Input } from '@angular/core';
import { pgCard } from '../pgbox/pg.model';

@Component({
  selector: 'app-pg',
  templateUrl: './pg.component.html',
  styleUrls: ['./pg.component.css']
})
export class PgComponent {
  @Input() pg!: pgCard;
}

import { Component, Input } from '@angular/core';
import { pgCard } from '../pgbox/pg.model';

@Component({
  selector: 'app-pg-details',
  templateUrl: './pg-details.component.html',
  styleUrls: ['./pg-details.component.css']
})
export class PgDetailsComponent {
  @Input() character!: pgCard;
}

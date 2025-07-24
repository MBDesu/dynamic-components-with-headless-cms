import { Component } from '@angular/core';
import { MatCardTitle } from '@angular/material/card';

export enum CardTitleSlots {
  title,
}

@Component({
  selector: 'app-card-title',
  imports: [MatCardTitle],
  templateUrl: './card-title.html',
  standalone: true,
  styleUrl: './card-title.scss'
})
export class CardTitle {

}

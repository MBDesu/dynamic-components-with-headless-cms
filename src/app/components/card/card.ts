import { Component, input } from '@angular/core';
import { MatCardAppearance, MatCardModule } from '@angular/material/card';

export interface CardConfig {
  appearance: MatCardAppearance;
  title?: string;
  image?: object;
  content?: object;
}

export enum CardSlots {
  header,
  image,
  content,
  actions,
}

@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.html',
  standalone: true,
  styleUrl: './card.scss'
})
export class Card {

  config = input<CardConfig>({
    appearance: 'outlined',
  });

}

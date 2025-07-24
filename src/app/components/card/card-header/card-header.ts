import { Component } from '@angular/core';
import { MatCardHeader } from '@angular/material/card';

export enum CardHeaderSlots {
  title,
  subtitle,
}

@Component({
  selector: 'app-card-header',
  imports: [MatCardHeader],
  templateUrl: './card-header.html',
  standalone: true,
  styleUrl: './card-header.scss'
})
export class CardHeader {

}

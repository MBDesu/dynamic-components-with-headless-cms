import { Component } from '@angular/core';
import { MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-card-content',
  imports: [MatCardContent],
  templateUrl: './card-content.html',
  standalone: true,
  styleUrl: './card-content.scss'
})
export class CardContent {

}

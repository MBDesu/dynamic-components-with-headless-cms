import { Component } from '@angular/core';
import { MatCardActions } from '@angular/material/card';

@Component({
  selector: 'app-card-actions',
  imports: [
    MatCardActions
  ],
  templateUrl: './card-actions.html',
  standalone: true,
  styleUrl: './card-actions.scss'
})
export class CardActions {

}

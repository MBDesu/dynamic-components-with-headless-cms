import { Component, input } from '@angular/core';
import { MatCardImage } from '@angular/material/card';

@Component({
  selector: 'app-card-image',
  imports: [
    MatCardImage
  ],
  templateUrl: './card-image.html',
  standalone: true,
  styleUrl: './card-image.scss'
})
export class CardImage {
  protected readonly url = input.required<string>();
  protected readonly alt = input<string>('');
}

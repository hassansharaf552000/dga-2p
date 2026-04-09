import { Component, Input } from '@angular/core';

type RatingSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'dga-rating',
  standalone: true,
  imports: [],
  templateUrl: './dga-rating.component.html',
  styleUrl: './dga-rating.component.scss'
})
export class DgaRatingComponent {
  @Input() value = 0;
  @Input() max = 5;
  @Input() size: RatingSize = 'medium';
  @Input() readonly = false;
  @Input() disabled = false;

  get stars(): number[] {
    return Array.from({ length: this.max }, (_, i) => i + 1);
  }
}

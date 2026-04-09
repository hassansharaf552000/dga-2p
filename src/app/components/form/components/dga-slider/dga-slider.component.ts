import { Component, Input } from '@angular/core';

@Component({
  selector: 'dga-slider',
  standalone: true,
  imports: [],
  templateUrl: './dga-slider.component.html',
  styleUrl: './dga-slider.component.scss'
})
export class DgaSliderComponent {
  @Input() label = '';
  @Input() value = 50;
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() showValue = true;
  @Input() disabled = false;
}

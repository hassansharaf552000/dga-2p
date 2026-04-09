import { Component, Input } from '@angular/core';

@Component({
  selector: 'dga-number-input',
  standalone: true,
  imports: [],
  templateUrl: './dga-number-input.component.html',
  styleUrl: './dga-number-input.component.scss'
})
export class DgaNumberInputComponent {
  @Input() label = '';
  @Input() value = 0;
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() disabled = false;
  @Input() error = '';
}

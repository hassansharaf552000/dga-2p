import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

type ProgressBarVariant = 'default' | 'success' | 'warning' | 'error';
type ProgressBarSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'dga-progress-bar',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './dga-progress-bar.component.html',
  styleUrl: './dga-progress-bar.component.scss'
})
export class DgaProgressBarComponent {
  @Input() value = 50;
  @Input() max = 100;
  @Input() variant: ProgressBarVariant = 'default';
  @Input() size: ProgressBarSize = 'medium';
  @Input() showLabel = false;
  @Input() label = '';
  @Input() indeterminate = false;

  get percentage(): number {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }
}

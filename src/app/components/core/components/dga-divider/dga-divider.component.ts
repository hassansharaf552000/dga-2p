import { Component, Input } from '@angular/core';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';

@Component({
  selector: 'dga-divider',
  standalone: true,
  imports: [],
  templateUrl: './dga-divider.component.html',
  styleUrl: './dga-divider.component.scss'
})
export class DgaDividerComponent {
  @Input() orientation: DividerOrientation = 'horizontal';
  @Input() variant: DividerVariant = 'solid';
  @Input() label = '';
}

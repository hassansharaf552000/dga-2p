import { Component, Input } from '@angular/core';

type FABPosition = 'bottom-right' | 'bottom-left' | 'bottom-center' | 'top-right' | 'top-left';
type FABSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'dga-floating-button',
  standalone: true,
  imports: [],
  templateUrl: './dga-floating-button.component.html',
  styleUrl: './dga-floating-button.component.scss'
})
export class DgaFloatingButtonComponent {
  @Input() icon = '+';
  @Input() label = '';
  @Input() position: FABPosition = 'bottom-right';
  @Input() size: FABSize = 'md';
  @Input() color = '#0066cc';
  @Input() extended = false;
  @Input() disabled = false;
}

import { Component, Input } from '@angular/core';

type IconSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'dga-icon',
  standalone: true,
  imports: [],
  templateUrl: './dga-icon.component.html',
  styleUrl: './dga-icon.component.scss'
})
export class DgaIconComponent {
  @Input() name = 'star';
  @Input() size: IconSize = 'medium';
  @Input() color = 'currentColor';
}

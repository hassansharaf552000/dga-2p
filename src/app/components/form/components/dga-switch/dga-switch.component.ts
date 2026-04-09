import { Component, Input } from '@angular/core';

type SwitchSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'dga-switch',
  standalone: true,
  imports: [],
  templateUrl: './dga-switch.component.html',
  styleUrl: './dga-switch.component.scss'
})
export class DgaSwitchComponent {
  @Input() label = '';
  @Input() checked = false;
  @Input() size: SwitchSize = 'medium';
  @Input() disabled = false;
}

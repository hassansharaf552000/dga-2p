import { Component, Input } from '@angular/core';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'dga-inline-alert',
  standalone: true,
  imports: [],
  templateUrl: './dga-inline-alert.component.html',
  styleUrl: './dga-inline-alert.component.scss'
})
export class DgaInlineAlertComponent {
  @Input() title = '';
  @Input() message = 'This is an alert message.';
  @Input() variant: AlertVariant = 'info';
  @Input() dismissible = false;
  @Input() showIcon = true;
}

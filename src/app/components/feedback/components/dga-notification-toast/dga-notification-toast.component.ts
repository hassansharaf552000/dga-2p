import { Component, Input } from '@angular/core';

type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
type ToastVariant = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'dga-notification-toast',
  standalone: true,
  imports: [],
  templateUrl: './dga-notification-toast.component.html',
  styleUrl: './dga-notification-toast.component.scss'
})
export class DgaNotificationToastComponent {
  @Input() title = '';
  @Input() message = 'This is a toast message.';
  @Input() variant: ToastVariant = 'info';
  @Input() position: ToastPosition = 'top-right';
  @Input() duration = 5000;
  @Input() showProgress = true;
  @Input() dismissible = true;
}

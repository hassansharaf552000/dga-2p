import { Component, Input } from '@angular/core';

type NotificationVariant = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'dga-notification',
  standalone: true,
  imports: [],
  templateUrl: './dga-notification.component.html',
  styleUrl: './dga-notification.component.scss'
})
export class DgaNotificationComponent {
  @Input() title = 'Notification';
  @Input() message = 'This is a notification message.';
  @Input() variant: NotificationVariant = 'info';
  @Input() timestamp = '';
  @Input() read = false;
  @Input() avatar = '';
}

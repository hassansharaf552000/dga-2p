import { Component } from '@angular/core';
import { DgaNotificationComponent } from '../../components/dga-notification/dga-notification.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-notification-playground',
  standalone: true,
  imports: [DgaNotificationComponent, DgaPlaygroundComponent],
  templateUrl: './dga-notification-playground.component.html',
  styleUrl: './dga-notification-playground.component.scss'
})
export class DgaNotificationPlaygroundComponent {
  componentProps = {
    title: 'New Message',
    message: 'You have received a new message from John.',
    variant: 'info',
    timestamp: '2 min ago',
    read: false,
    avatar: ''
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Notification',
    description: 'In-app notification item.',
    selector: 'dga-notification',
    componentName: 'DgaNotification',
    textFields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'message', label: 'Message', type: 'text' },
      { key: 'timestamp', label: 'Timestamp', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['info', 'success', 'warning', 'error'] }
    ],
    booleanFields: [
      { key: 'read', label: 'Read', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-notification
  title="${props.title}"
  message="${props.message}"
  variant="${props.variant}">
</dga-notification>`,
    generateCss: () => ''
  };
}

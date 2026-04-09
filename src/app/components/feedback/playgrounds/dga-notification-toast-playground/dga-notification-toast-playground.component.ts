import { Component } from '@angular/core';
import { DgaNotificationToastComponent } from '../../components/dga-notification-toast/dga-notification-toast.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-notification-toast-playground',
  standalone: true,
  imports: [DgaNotificationToastComponent, DgaPlaygroundComponent],
  templateUrl: './dga-notification-toast-playground.component.html',
  styleUrl: './dga-notification-toast-playground.component.scss'
})
export class DgaNotificationToastPlaygroundComponent {
  componentProps = {
    title: 'Success!',
    message: 'Your changes have been saved.',
    variant: 'success',
    position: 'top-right',
    showProgress: true,
    dismissible: true
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Notification Toast',
    description: 'Temporary popup notification.',
    selector: 'dga-notification-toast',
    componentName: 'DgaNotificationToast',
    textFields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'message', label: 'Message', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['info', 'success', 'warning', 'error'] },
      { key: 'position', label: 'Position', type: 'select', options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'] }
    ],
    booleanFields: [
      { key: 'showProgress', label: 'Show Progress', type: 'boolean' },
      { key: 'dismissible', label: 'Dismissible', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-notification-toast
  title="${props.title}"
  message="${props.message}"
  variant="${props.variant}">
</dga-notification-toast>`,
    generateCss: () => ''
  };
}

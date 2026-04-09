import { Component } from '@angular/core';
import { DgaInlineAlertComponent } from '../../components/dga-inline-alert/dga-inline-alert.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-inline-alert-playground',
  standalone: true,
  imports: [DgaInlineAlertComponent, DgaPlaygroundComponent],
  templateUrl: './dga-inline-alert-playground.component.html',
  styleUrl: './dga-inline-alert-playground.component.scss'
})
export class DgaInlineAlertPlaygroundComponent {
  componentProps = {
    title: 'Alert Title',
    message: 'This is an alert message with additional information.',
    variant: 'info',
    dismissible: false,
    showIcon: true
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Inline Alert',
    description: 'Contextual feedback messages.',
    selector: 'dga-inline-alert',
    componentName: 'DgaInlineAlert',
    textFields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'message', label: 'Message', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['info', 'success', 'warning', 'error'] }
    ],
    booleanFields: [
      { key: 'dismissible', label: 'Dismissible', type: 'boolean' },
      { key: 'showIcon', label: 'Show Icon', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-inline-alert
  title="${props.title}"
  message="${props.message}"
  variant="${props.variant}">
</dga-inline-alert>`,
    generateCss: () => ''
  };
}

import { Component } from '@angular/core';
import { DgaBadgeComponent } from '../../components/dga-badge/dga-badge.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-badge-playground',
  standalone: true,
  imports: [DgaBadgeComponent, DgaPlaygroundComponent],
  templateUrl: './dga-badge-playground.component.html',
  styleUrl: './dga-badge-playground.component.scss'
})
export class DgaBadgePlaygroundComponent {
  componentProps = {
    count: 5,
    maxCount: 99,
    variant: 'count',
    color: 'error',
    showZero: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Badge',
    description: 'Small status indicator or notification count.',
    selector: 'dga-badge',
    componentName: 'DgaBadge',
    textFields: [
      { key: 'count', label: 'Count', type: 'text' },
      { key: 'maxCount', label: 'Max Count', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['dot', 'count'] },
      { key: 'color', label: 'Color', type: 'select', options: ['default', 'primary', 'success', 'warning', 'error'] }
    ],
    booleanFields: [
      { key: 'showZero', label: 'Show Zero', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-badge
  [count]="${props.count}"
  variant="${props.variant}"
  color="${props.color}">
</dga-badge>`,
    generateCss: () => ''
  };
}

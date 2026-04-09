import { Component } from '@angular/core';
import { DgaProgressBarComponent } from '../../components/dga-progress-bar/dga-progress-bar.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-progress-bar-playground',
  standalone: true,
  imports: [DgaProgressBarComponent, DgaPlaygroundComponent],
  templateUrl: './dga-progress-bar-playground.component.html',
  styleUrl: './dga-progress-bar-playground.component.scss'
})
export class DgaProgressBarPlaygroundComponent {
  componentProps = {
    value: 65,
    max: 100,
    variant: 'default',
    size: 'medium',
    showLabel: true,
    label: 'Progress',
    indeterminate: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Progress Bar',
    description: 'Linear progress indicator.',
    selector: 'dga-progress-bar',
    componentName: 'DgaProgressBar',
    textFields: [
      { key: 'value', label: 'Value', type: 'text' },
      { key: 'label', label: 'Label', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['default', 'success', 'warning', 'error'] },
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] }
    ],
    booleanFields: [
      { key: 'showLabel', label: 'Show Percentage', type: 'boolean' },
      { key: 'indeterminate', label: 'Indeterminate', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-progress-bar
  [value]="${props.value}"
  variant="${props.variant}"
  size="${props.size}">
</dga-progress-bar>`,
    generateCss: () => ''
  };
}

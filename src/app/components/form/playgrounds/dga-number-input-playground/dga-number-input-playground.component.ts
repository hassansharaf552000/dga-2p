import { Component } from '@angular/core';
import { DgaNumberInputComponent } from '../../components/dga-number-input/dga-number-input.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-number-input-playground',
  standalone: true,
  imports: [DgaNumberInputComponent, DgaPlaygroundComponent],
  templateUrl: './dga-number-input-playground.component.html',
  styleUrl: './dga-number-input-playground.component.scss'
})
export class DgaNumberInputPlaygroundComponent {
  componentProps = {
    label: 'Quantity',
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    error: ''
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Number Input',
    description: 'Numeric input with increment/decrement controls.',
    selector: 'dga-number-input',
    componentName: 'DgaNumberInput',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'min', label: 'Min', type: 'text' },
      { key: 'max', label: 'Max', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-number-input
  label="${props.label}"
  [min]="${props.min}"
  [max]="${props.max}">
</dga-number-input>`,
    generateCss: () => ''
  };
}

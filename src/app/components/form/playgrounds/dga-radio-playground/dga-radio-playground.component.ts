import { Component } from '@angular/core';
import { DgaRadioComponent } from '../../components/dga-radio/dga-radio.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-radio-playground',
  standalone: true,
  imports: [DgaRadioComponent, DgaPlaygroundComponent],
  templateUrl: './dga-radio-playground.component.html',
  styleUrl: './dga-radio-playground.component.scss'
})
export class DgaRadioPlaygroundComponent {
  componentProps = {
    label: 'Radio',
    name: 'radio-group',
    value: 'option1',
    checked: false,
    disabled: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Radio',
    description: 'Single selection from a group of options.',
    selector: 'dga-radio',
    componentName: 'DgaRadio',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'name', label: 'Group Name', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'checked', label: 'Checked', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-radio
  label="${props.label}"
  name="${props.name}"
  [checked]="${props.checked}">
</dga-radio>`,
    generateCss: () => ''
  };
}

import { Component } from '@angular/core';
import { DgaSwitchComponent } from '../../components/dga-switch/dga-switch.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-switch-playground',
  standalone: true,
  imports: [DgaSwitchComponent, DgaPlaygroundComponent],
  templateUrl: './dga-switch-playground.component.html',
  styleUrl: './dga-switch-playground.component.scss'
})
export class DgaSwitchPlaygroundComponent {
  componentProps = {
    label: 'Enable feature',
    checked: false,
    size: 'medium',
    disabled: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Switch',
    description: 'Toggle switch for binary settings.',
    selector: 'dga-switch',
    componentName: 'DgaSwitch',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] }
    ],
    booleanFields: [
      { key: 'checked', label: 'Checked', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-switch
  label="${props.label}"
  size="${props.size}"
  [checked]="${props.checked}">
</dga-switch>`,
    generateCss: () => ''
  };
}

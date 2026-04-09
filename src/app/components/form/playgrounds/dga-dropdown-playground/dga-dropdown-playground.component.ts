import { Component } from '@angular/core';
import { DgaDropdownComponent } from '../../components/dga-dropdown/dga-dropdown.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-dropdown-playground',
  standalone: true,
  imports: [DgaDropdownComponent, DgaPlaygroundComponent],
  templateUrl: './dga-dropdown-playground.component.html',
  styleUrl: './dga-dropdown-playground.component.scss'
})
export class DgaDropdownPlaygroundComponent {
  componentProps = {
    label: 'Select',
    placeholder: 'Select an option',
    options: ['Option 1', 'Option 2', 'Option 3'],
    value: '',
    disabled: false,
    error: ''
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Dropdown',
    description: 'Single-select dropdown input.',
    selector: 'dga-dropdown',
    componentName: 'DgaDropdown',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'placeholder', label: 'Placeholder', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-dropdown
  label="${props.label}"
  placeholder="${props.placeholder}"
  [options]="['Option 1', 'Option 2', 'Option 3']">
</dga-dropdown>`,
    generateCss: () => ''
  };
}

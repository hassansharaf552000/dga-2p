import { Component } from '@angular/core';
import { DgaDatePickerComponent } from '../../components/dga-date-picker/dga-date-picker.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-date-picker-playground',
  standalone: true,
  imports: [DgaDatePickerComponent, DgaPlaygroundComponent],
  templateUrl: './dga-date-picker-playground.component.html',
  styleUrl: './dga-date-picker-playground.component.scss'
})
export class DgaDatePickerPlaygroundComponent {
  componentProps = {
    label: 'Date',
    value: '',
    placeholder: 'Select date',
    disabled: false,
    error: ''
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Date Picker',
    description: 'Date selection input.',
    selector: 'dga-date-picker',
    componentName: 'DgaDatePicker',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'placeholder', label: 'Placeholder', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-date-picker
  label="${props.label}"
  placeholder="${props.placeholder}">
</dga-date-picker>`,
    generateCss: () => ''
  };
}

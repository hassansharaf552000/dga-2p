import { Component } from '@angular/core';
import { DgaTextInputComponent } from '../../components/dga-text-input/dga-text-input.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-text-input-playground',
  standalone: true,
  imports: [DgaTextInputComponent, DgaPlaygroundComponent],
  templateUrl: './dga-text-input-playground.component.html',
  styleUrl: './dga-text-input-playground.component.scss'
})
export class DgaTextInputPlaygroundComponent {
  componentProps = {
    label: 'Label',
    placeholder: 'Enter text...',
    value: '',
    size: 'medium',
    disabled: false,
    error: '',
    helperText: 'Helper text'
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Text Input',
    description: 'Single-line text input field.',
    selector: 'dga-text-input',
    componentName: 'DgaTextInput',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'placeholder', label: 'Placeholder', type: 'text' },
      { key: 'error', label: 'Error', type: 'text' },
      { key: 'helperText', label: 'Helper Text', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] }
    ],
    booleanFields: [
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-text-input
  label="${props.label}"
  placeholder="${props.placeholder}"
  size="${props.size}">
</dga-text-input>`,
    generateCss: () => ''
  };
}

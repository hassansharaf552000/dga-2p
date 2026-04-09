import { Component } from '@angular/core';
import { DgaTextareaComponent } from '../../components/dga-textarea/dga-textarea.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-textarea-playground',
  standalone: true,
  imports: [DgaTextareaComponent, DgaPlaygroundComponent],
  templateUrl: './dga-textarea-playground.component.html',
  styleUrl: './dga-textarea-playground.component.scss'
})
export class DgaTextareaPlaygroundComponent {
  componentProps = {
    label: 'Label',
    placeholder: 'Enter text...',
    value: '',
    rows: 4,
    disabled: false,
    error: '',
    helperText: 'Helper text'
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Textarea',
    description: 'Multi-line text input field.',
    selector: 'dga-textarea',
    componentName: 'DgaTextarea',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'placeholder', label: 'Placeholder', type: 'text' },
      { key: 'rows', label: 'Rows', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-textarea
  label="${props.label}"
  placeholder="${props.placeholder}"
  [rows]="${props.rows}">
</dga-textarea>`,
    generateCss: () => ''
  };
}

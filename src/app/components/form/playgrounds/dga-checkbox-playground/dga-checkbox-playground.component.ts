import { Component } from '@angular/core';
import {
  CheckboxSize,
  CheckboxState,
  CheckboxStyle,
  DgaCheckboxComponent
} from '../../components/dga-checkbox/dga-checkbox.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

interface CheckboxPlaygroundProps {
  label: string;
  description: string;
  errorMessage: string;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  required: boolean;
  size: CheckboxSize;
  variant: CheckboxStyle;
  state: CheckboxState;
  rtl: boolean;
}

@Component({
  selector: 'dga-checkbox-playground',
  standalone: true,
  imports: [DgaCheckboxComponent, DgaPlaygroundComponent],
  templateUrl: './dga-checkbox-playground.component.html',
  styleUrl: './dga-checkbox-playground.component.scss'
})
export class DgaCheckboxPlaygroundComponent {
  componentProps: CheckboxPlaygroundProps = {
    label: 'Checkbox Label',
    description: 'When a selection needs a further detailed explanation, it goes here.',
    errorMessage: '',
    checked: true,
    indeterminate: false,
    disabled: false,
    required: false,
    size: 'medium',
    variant: 'primary',
    state: 'default',
    rtl: false
  };

  playgroundConfig: PlaygroundConfig = {
    title: 'Checkbox',
    description: 'Binary and mixed-state selection input with DGA sizes, styles, and interaction states.',
    selector: 'dga-checkbox',
    componentName: 'DgaCheckbox',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'description', label: 'Description', type: 'text' },
      { key: 'errorMessage', label: 'Error message', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['xsmall', 'small', 'medium'] },
      { key: 'variant', label: 'Variant', type: 'select', options: ['primary', 'neutral'] },
      {
        key: 'state',
        label: 'State',
        type: 'select',
        options: ['default', 'hovered', 'pressed', 'focused', 'read-only', 'disabled']
      }
    ],
    booleanFields: [
      { key: 'checked', label: 'Checked', type: 'boolean' },
      { key: 'indeterminate', label: 'Indeterminate', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' },
      { key: 'required', label: 'Required', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props as CheckboxPlaygroundProps),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: CheckboxPlaygroundProps): string {
    const attrs = [
      this.stringAttr('label', props.label),
      this.stringAttr('description', props.description),
      this.stringAttr('errorMessage', props.errorMessage),
      this.stringAttr('size', props.size),
      this.stringAttr('variant', props.variant),
      this.stringAttr('state', props.state),
      props.checked ? '[checked]="true"' : '',
      props.indeterminate ? '[indeterminate]="true"' : '',
      props.disabled ? '[disabled]="true"' : '',
      props.required ? '[required]="true"' : '',
      props.rtl ? '[rtl]="true"' : ''
    ].filter(Boolean);

    return [`<dga-checkbox`, ...attrs.map((attr) => `  ${attr}`), `></dga-checkbox>`].join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-checkbox {
  --dga-checkbox-size: 24px;
  --dga-checkbox-border: var(--dga-neutral-500);
  --dga-checkbox-checked-bg: var(--dga-600);
  --dga-checkbox-mark-color: var(--dga-text-on-color);

  display: inline-flex;
  align-items: flex-start;
  gap: var(--dga-space-2);
  color: var(--dga-text-default);
  font-family: var(--dga-font-text), sans-serif;
  cursor: pointer;
}

.dga-checkbox__control,
.dga-checkbox__box {
  width: var(--dga-checkbox-size);
  height: var(--dga-checkbox-size);
}

.dga-checkbox__control {
  position: relative;
  flex: 0 0 var(--dga-checkbox-size);
}

.dga-checkbox__input {
  position: absolute;
  inset: 0;
  z-index: 2;
  margin: 0;
  opacity: 0;
  cursor: inherit;
}

.dga-checkbox__box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--dga-checkbox-border);
  border-radius: var(--dga-radius-xs);
  background: transparent;
}

.dga-checkbox--checked .dga-checkbox__box,
.dga-checkbox--indeterminate .dga-checkbox__box,
.dga-checkbox__input:checked + .dga-checkbox__box {
  border-color: var(--dga-checkbox-checked-bg);
  background: var(--dga-checkbox-checked-bg);
}

.dga-checkbox--neutral {
  --dga-checkbox-checked-bg: var(--dga-neutral-950);
}

.dga-checkbox--small {
  --dga-checkbox-size: 20px;
}

.dga-checkbox--xsmall {
  --dga-checkbox-size: 16px;
}

.dga-checkbox__label {
  font-weight: var(--dga-font-medium);
}

.dga-checkbox__description {
  color: var(--dga-text-secondary);
}

.dga-checkbox__message {
  color: var(--dga-error-700);
}
`;
  }

  private stringAttr(name: string, value: string): string {
    return value ? `${name}="${this.escapeAttribute(value)}"` : '';
  }

  private escapeAttribute(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

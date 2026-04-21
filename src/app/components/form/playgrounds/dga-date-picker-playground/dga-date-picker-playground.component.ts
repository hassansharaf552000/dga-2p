import { Component } from '@angular/core';
import {
  DatePickerMode,
  DatePickerSize,
  DatePickerState,
  DatePickerVariant,
  DgaDatePickerComponent
} from '../../components/dga-date-picker/dga-date-picker.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

interface DatePickerPlaygroundProps {
  label: string;
  mode: DatePickerMode;
  variant: DatePickerVariant;
  value: string;
  startValue: string;
  endValue: string;
  placeholder: string;
  startPlaceholder: string;
  endPlaceholder: string;
  rangeSeparator: string;
  helperText: string;
  error: string;
  min: string;
  max: string;
  size: DatePickerSize;
  state: DatePickerState;
  disabled: boolean;
  readOnly: boolean;
  required: boolean;
  onColor: boolean;
  fullWidth: boolean;
  rtl: boolean;
}

@Component({
  selector: 'dga-date-picker-playground',
  standalone: true,
  imports: [DgaDatePickerComponent, DgaPlaygroundComponent],
  templateUrl: './dga-date-picker-playground.component.html',
  styleUrl: './dga-date-picker-playground.component.scss'
})
export class DgaDatePickerPlaygroundComponent {
  componentProps: DatePickerPlaygroundProps = {
    label: 'Date',
    mode: 'picker',
    variant: 'default',
    value: '',
    startValue: '',
    endValue: '',
    placeholder: 'Select date',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    rangeSeparator: 'to',
    helperText: 'Choose a date from the calendar.',
    error: '',
    min: '',
    max: '',
    size: 'medium',
    state: 'default',
    disabled: false,
    readOnly: false,
    required: false,
    onColor: false,
    fullWidth: false,
    rtl: false
  };

  playgroundConfig: PlaygroundConfig = {
    title: 'Date Picker',
    description: 'Picker and range date selection with calendar popover, styles, states, min/max limits, and RTL support.',
    selector: 'dga-date-picker',
    componentName: 'DgaDatePicker',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'value', label: 'Value (YYYY-MM-DD)', type: 'text', visibleWhen: (props) => props.mode === 'picker' },
      { key: 'startValue', label: 'Start value', type: 'text', visibleWhen: (props) => props.mode === 'range' },
      { key: 'endValue', label: 'End value', type: 'text', visibleWhen: (props) => props.mode === 'range' },
      { key: 'placeholder', label: 'Placeholder', type: 'text', visibleWhen: (props) => props.mode === 'picker' },
      { key: 'startPlaceholder', label: 'Start placeholder', type: 'text', visibleWhen: (props) => props.mode === 'range' },
      { key: 'endPlaceholder', label: 'End placeholder', type: 'text', visibleWhen: (props) => props.mode === 'range' },
      { key: 'rangeSeparator', label: 'Range separator', type: 'text', visibleWhen: (props) => props.mode === 'range' },
      { key: 'helperText', label: 'Helper text', type: 'text' },
      { key: 'error', label: 'Error', type: 'text' },
      { key: 'min', label: 'Min date', type: 'text' },
      { key: 'max', label: 'Max date', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'mode', label: 'Mode', type: 'select', options: ['picker', 'range'] },
      { key: 'variant', label: 'Style', type: 'select', options: ['default', 'filled', 'outlined', 'ghost', 'on-color'] },
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] },
      { key: 'state', label: 'State', type: 'select', options: ['default', 'hovered', 'pressed', 'focused', 'disabled', 'error', 'read-only'] }
    ],
    booleanFields: [
      { key: 'disabled', label: 'Disabled', type: 'boolean' },
      { key: 'readOnly', label: 'Read only', type: 'boolean' },
      { key: 'required', label: 'Required', type: 'boolean' },
      { key: 'onColor', label: 'On color', type: 'boolean' },
      { key: 'fullWidth', label: 'Full width', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props as DatePickerPlaygroundProps),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: DatePickerPlaygroundProps): string {
    const attrs = [
      this.stringAttr('label', props.label),
      this.stringAttr('mode', props.mode),
      this.stringAttr('variant', props.variant),
      props.mode === 'picker' ? this.stringAttr('value', props.value) : '',
      props.mode === 'picker' ? this.stringAttr('placeholder', props.placeholder) : '',
      props.mode === 'range' ? this.stringAttr('startValue', props.startValue) : '',
      props.mode === 'range' ? this.stringAttr('endValue', props.endValue) : '',
      props.mode === 'range' ? this.stringAttr('startPlaceholder', props.startPlaceholder) : '',
      props.mode === 'range' ? this.stringAttr('endPlaceholder', props.endPlaceholder) : '',
      props.mode === 'range' ? this.stringAttr('rangeSeparator', props.rangeSeparator) : '',
      this.stringAttr('helperText', props.helperText),
      this.stringAttr('error', props.error),
      this.stringAttr('min', props.min),
      this.stringAttr('max', props.max),
      this.stringAttr('size', props.size),
      this.stringAttr('state', props.state),
      props.disabled ? '[disabled]="true"' : '',
      props.readOnly ? '[readOnly]="true"' : '',
      props.required ? '[required]="true"' : '',
      props.onColor ? '[onColor]="true"' : '',
      props.fullWidth ? '[fullWidth]="true"' : '',
      props.rtl ? '[rtl]="true"' : ''
    ].filter(Boolean);

    return [`<dga-date-picker`, ...attrs.map((attr) => `  ${attr}`), `></dga-date-picker>`].join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-date-picker {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--dga-space-1);
  width: 320px;
  font-family: var(--dga-font-text), sans-serif;
}

.dga-date-picker__input {
  width: 100%;
  min-height: 40px;
  border: 1px solid var(--dga-neutral-400);
  border-radius: var(--dga-radius-sm);
  background: var(--dga-bg-card);
  color: var(--dga-text-default);
}

.dga-date-picker__range {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) 40px;
  align-items: center;
  border: 1px solid var(--dga-neutral-400);
  border-radius: var(--dga-radius-sm);
}

.dga-date-picker__calendar {
  position: absolute;
  top: calc(100% + var(--dga-space-2));
  width: 320px;
  padding: var(--dga-space-4);
  border: 1px solid var(--dga-border-neutral-primary);
  border-radius: var(--dga-radius-md);
  background: var(--dga-bg-card);
  box-shadow: var(--dga-shadow-3xl);
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

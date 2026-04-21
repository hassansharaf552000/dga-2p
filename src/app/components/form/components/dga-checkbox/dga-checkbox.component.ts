import { Component, EventEmitter, Input, Output } from '@angular/core';

export type CheckboxSize = 'xsmall' | 'small' | 'medium';
export type CheckboxStyle = 'primary' | 'neutral';
export type CheckboxState = 'default' | 'hovered' | 'pressed' | 'focused' | 'read-only' | 'disabled';

let nextCheckboxId = 0;

@Component({
  selector: 'dga-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './dga-checkbox.component.html',
  styleUrl: './dga-checkbox.component.scss'
})
export class DgaCheckboxComponent {
  @Input() label = 'Checkbox';
  @Input() description = '';
  @Input() errorMessage = '';
  @Input() name = '';
  @Input() value = '';
  @Input() inputId = `dga-checkbox-${nextCheckboxId++}`;
  @Input() ariaLabel = '';
  @Input() required = false;
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() disabled = false;
  @Input() size: CheckboxSize = 'medium';
  @Input() variant: CheckboxStyle = 'primary';
  @Input() state: CheckboxState = 'default';
  @Input() rtl = false;

  @Input('style')
  set legacyStyle(value: CheckboxStyle | null | undefined) {
    if (value) this.variant = value;
  }

  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() indeterminateChange = new EventEmitter<boolean>();

  get checkboxClasses(): string[] {
    const stateClass = this.isDisabled ? 'dga-checkbox--disabled' : `dga-checkbox--${this.state}`;

    return [
      'dga-checkbox',
      `dga-checkbox--${this.size}`,
      `dga-checkbox--${this.variant}`,
      stateClass,
      this.checked ? 'dga-checkbox--checked' : '',
      this.indeterminate ? 'dga-checkbox--indeterminate' : '',
      this.rtl ? 'dga-checkbox--rtl' : ''
    ].filter(Boolean);
  }

  get hasContent(): boolean {
    return !!(this.label || this.description || this.errorMessage);
  }

  get isReadOnly(): boolean {
    return this.state === 'read-only';
  }

  get isDisabled(): boolean {
    return this.disabled || this.state === 'disabled';
  }

  get computedAriaLabel(): string | null {
    return this.hasContent ? null : this.ariaLabel || 'Checkbox';
  }

  onInputClick(event: MouseEvent): void {
    if (!this.isReadOnly) return;
    event.preventDefault();
    event.stopPropagation();
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (this.isReadOnly || this.isDisabled) {
      input.checked = this.checked;
      input.indeterminate = this.indeterminate;
      return;
    }

    if (this.indeterminate) {
      this.indeterminate = false;
      this.indeterminateChange.emit(false);
    }

    this.checked = input.checked;
    this.checkedChange.emit(this.checked);
  }
}

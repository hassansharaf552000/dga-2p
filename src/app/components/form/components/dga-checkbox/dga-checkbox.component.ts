import { Component, Input } from '@angular/core';

type CheckboxSize = 'xsmall' | 'small' | 'medium';
type CheckboxStyle = 'primary' | 'neutral';
type CheckboxState = 'default' | 'hovered' | 'pressed' | 'focused' | 'read-only' | 'disabled';

@Component({
  selector: 'dga-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './dga-checkbox.component.html',
  styleUrl: './dga-checkbox.component.scss'
})
export class DgaCheckboxComponent {
  @Input() label = 'Checkbox';
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() disabled = false;
  @Input() size: CheckboxSize = 'medium';
  @Input() style: CheckboxStyle = 'primary';
  @Input() state: CheckboxState = 'default';
  @Input() rtl = false;

  readonly checkmarkUrl = 'https://www.figma.com/api/mcp/asset/4f49421d-e1bc-4b62-8262-77f609339a4b';
  readonly indeterminateUrl = 'https://www.figma.com/api/mcp/asset/0a9d2aa3-c81b-4eb5-b361-0d77974c30fe';
  readonly focusCheckedUrl = 'https://www.figma.com/api/mcp/asset/b59092fb-dd19-42d9-a8e2-b3f31a1b739b';

  get checkboxClasses(): string[] {
    return [
      'dga-checkbox',
      `dga-checkbox--${this.size}`,
      `dga-checkbox--${this.style}`,
      `dga-checkbox--${this.state}`,
      this.checked ? 'dga-checkbox--checked' : '',
      this.indeterminate ? 'dga-checkbox--indeterminate' : '',
      this.disabled || this.state === 'disabled' ? 'dga-checkbox--disabled' : '',
      this.rtl ? 'dga-checkbox--rtl' : ''
    ].filter(Boolean);
  }

  get isReadOnly(): boolean {
    return this.state === 'read-only';
  }
}

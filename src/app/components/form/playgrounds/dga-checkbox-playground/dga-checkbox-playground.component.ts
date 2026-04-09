import { Component } from '@angular/core';
import { DgaCheckboxComponent } from '../../components/dga-checkbox/dga-checkbox.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type CheckboxSize = 'xsmall' | 'small' | 'medium';
type CheckboxStyle = 'primary' | 'neutral';
type CheckboxState = 'default' | 'hovered' | 'pressed' | 'focused' | 'read-only' | 'disabled';

@Component({
  selector: 'dga-checkbox-playground',
  standalone: true,
  imports: [DgaCheckboxComponent, DgaPlaygroundComponent],
  templateUrl: './dga-checkbox-playground.component.html',
  styleUrl: './dga-checkbox-playground.component.scss'
})
export class DgaCheckboxPlaygroundComponent {
  componentProps = {
    label: 'Checkbox',
    checked: true,
    indeterminate: false,
    disabled: false,
    size: 'medium' as CheckboxSize,
    style: 'primary' as CheckboxStyle,
    state: 'default' as CheckboxState,
    rtl: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Checkbox',
    description: 'Binary selection input with states, sizes, and styles.',
    selector: 'dga-checkbox',
    componentName: 'DgaCheckbox',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['xsmall', 'small', 'medium'] },
      { key: 'style', label: 'Style', type: 'select', options: ['primary', 'neutral'] },
      { key: 'state', label: 'State', type: 'select', options: ['default', 'hovered', 'pressed', 'focused', 'read-only', 'disabled'] }
    ],
    booleanFields: [
      { key: 'checked', label: 'Checked', type: 'boolean' },
      { key: 'indeterminate', label: 'Indeterminate', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: any): string {
    const classes = [
      'dga-checkbox',
      `dga-checkbox--${props.size}`,
      `dga-checkbox--${props.style}`,
      `dga-checkbox--${props.state}`,
      props.checked ? 'dga-checkbox--checked' : '',
      props.indeterminate ? 'dga-checkbox--indeterminate' : '',
      props.disabled || props.state === 'disabled' ? 'dga-checkbox--disabled' : '',
      props.rtl ? 'dga-checkbox--rtl' : ''
    ].filter(Boolean);

    const lines: string[] = [];
    lines.push(`<label class="${classes.join(' ')}"${props.rtl ? ' dir="rtl"' : ''}>`);
    lines.push('  <input type="checkbox" class="dga-checkbox__input"');
    if (props.checked) lines.push('    checked');
    if (props.disabled || props.state === 'disabled') lines.push('    disabled');
    lines.push('  />');
    lines.push('  <span class="dga-checkbox__box" aria-hidden="true">');
    if (props.indeterminate) {
      lines.push(`    <img src="https://www.figma.com/api/mcp/asset/0a9d2aa3-c81b-4eb5-b361-0d77974c30fe" alt="" />`);
    } else if (props.checked) {
      lines.push(`    <img src="https://www.figma.com/api/mcp/asset/4f49421d-e1bc-4b62-8262-77f609339a4b" alt="" />`);
    }
    lines.push('  </span>');
    lines.push(`  <span class="dga-checkbox__label">${props.label}</span>`);
    lines.push('</label>');
    return lines.join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-checkbox {
  display: inline-flex;
  align-items: center;
  gap: var(--dga-space-2);
  font-family: var(--dga-font-text), sans-serif;
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
  color: var(--dga-text-default);
  cursor: pointer;
  user-select: none;
}

.dga-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.dga-checkbox__box {
  width: 24px;
  height: 24px;
  border-radius: 2px;
  border: 1px solid #161616;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
}

.dga-checkbox__box img {
  width: 100%;
  height: 100%;
  display: block;
}

.dga-checkbox__label {
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
}

.dga-checkbox--small {
  font-size: var(--dga-text-sm-size);
}

.dga-checkbox--small .dga-checkbox__box {
  width: 20px;
  height: 20px;
}

.dga-checkbox--xsmall {
  font-size: var(--dga-text-xs-size);
}

.dga-checkbox--xsmall .dga-checkbox__box {
  width: 16px;
  height: 16px;
}

.dga-checkbox--primary.dga-checkbox--checked .dga-checkbox__box,
.dga-checkbox--primary.dga-checkbox--indeterminate .dga-checkbox__box,
.dga-checkbox--neutral.dga-checkbox--checked .dga-checkbox__box,
.dga-checkbox--neutral.dga-checkbox--indeterminate .dga-checkbox__box {
  background: #161616;
  border-color: #161616;
}

.dga-checkbox--hovered .dga-checkbox__box::after {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 9999px;
  background: #f3f4f6;
  z-index: -1;
}

.dga-checkbox--pressed .dga-checkbox__box::after {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 9999px;
  background: #f3f4f6;
  z-index: -1;
}

.dga-checkbox--focused .dga-checkbox__box::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 2px solid #161616;
  border-radius: 2px;
  z-index: -1;
}

.dga-checkbox--disabled,
.dga-checkbox--read-only {
  opacity: 0.5;
  cursor: not-allowed;
}

.dga-checkbox--rtl {
  direction: rtl;
}
`;
  }
}

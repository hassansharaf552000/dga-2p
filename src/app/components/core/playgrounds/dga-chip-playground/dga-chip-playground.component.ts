import { Component } from '@angular/core';
import { DgaChipComponent } from '../../components/dga-chip/dga-chip.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type ChipStyle = 'primary' | 'neutral';
type ChipSize = 'small' | 'medium' | 'large';
type ChipState = 'default' | 'hovered' | 'pressed' | 'selected' | 'focused' | 'disabled';

@Component({
  selector: 'dga-chip-playground',
  standalone: true,
  imports: [DgaChipComponent, DgaPlaygroundComponent],
  templateUrl: './dga-chip-playground.component.html',
  styleUrl: './dga-chip-playground.component.scss'
})
export class DgaChipPlaygroundComponent {
  readonly iconUrl = 'https://www.figma.com/api/mcp/asset/d9833afc-95c4-4c10-ada7-09c6df8fafad';

  componentProps = {
    label: 'Item',
    style: 'primary' as ChipStyle,
    size: 'small' as ChipSize,
    state: 'default' as ChipState,
    rounded: false,
    rtl: false,
    onColor: false,
    leadIcon: false,
    trailIcon: false,
    disabled: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Chip',
    description: 'Small, interactive element for tags, filters, and selections.',
    selector: 'dga-chip',
    componentName: 'DgaChip',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'style', label: 'Style', type: 'select', options: ['primary', 'neutral'] },
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] },
      { key: 'state', label: 'State', type: 'select', options: ['default', 'hovered', 'pressed', 'selected', 'focused', 'disabled'] }
    ],
    booleanFields: [
      { key: 'rounded', label: 'Rounded', type: 'boolean' },
      { key: 'leadIcon', label: 'Lead icon', type: 'boolean' },
      { key: 'trailIcon', label: 'Trail icon', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      { key: 'onColor', label: 'On color', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: any): string {
    const classes = ['dga-chip', `dga-chip--${props.style}`, `dga-chip--${props.size}`, `dga-chip--${props.state}`];
    if (props.rounded) classes.push('dga-chip--rounded');
    if (props.rtl) classes.push('dga-chip--rtl');
    if (props.onColor) classes.push('dga-chip--on-color');
    if (props.disabled || props.state === 'disabled') classes.push('dga-chip--disabled');

    const attrs: string[] = [`class="${classes.join(' ')}"`];
    if (props.rtl) attrs.push('dir="rtl"');
    if (props.disabled || props.state === 'disabled') attrs.push('disabled');

    const lines: string[] = [];
    lines.push(`<button ${attrs.join(' ')} type="button">`);
    if (props.leadIcon) {
      lines.push('  <span class="dga-chip__icon dga-chip__icon--lead" aria-hidden="true">');
      lines.push(`    <img src="${this.iconUrl}" alt="" />`);
      lines.push('  </span>');
    }
    lines.push(`  <span class="dga-chip__label">${props.label}</span>`);
    if (props.trailIcon) {
      lines.push('  <span class="dga-chip__icon dga-chip__icon--trail" aria-hidden="true">');
      lines.push(`    <img src="${this.iconUrl}" alt="" />`);
      lines.push('  </span>');
    }
    lines.push('</button>');
    return lines.join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-chip {
  --dga-chip-bg: var(--dga-bg-brand-light);
  --dga-chip-text: var(--dga-text-brand-primary);
  --dga-chip-hover-bg: var(--dga-200);
  --dga-chip-pressed-bg: var(--dga-400);
  --dga-chip-selected-bg: var(--dga-600);
  --dga-chip-selected-text: var(--dga-text-on-color);
  --dga-chip-disabled-bg: var(--dga-neutral-200);
  --dga-chip-disabled-text: var(--dga-neutral-400);
  --dga-chip-height: 20px;
  --dga-chip-padding-x: var(--dga-space-3);
  --dga-chip-font-size: var(--dga-text-2xs-size);
  --dga-chip-line-height: var(--dga-text-2xs-line);
  --dga-chip-font-weight: var(--dga-font-semibold);
  --dga-chip-radius: var(--dga-radius-sm);
  --dga-chip-icon-size: 24px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--dga-space-1);
  height: var(--dga-chip-height);
  min-height: var(--dga-chip-height);
  padding: 0 var(--dga-chip-padding-x);
  border: none;
  border-radius: var(--dga-chip-radius);
  background: var(--dga-chip-bg);
  color: var(--dga-chip-text);
  font-family: var(--dga-font-text), sans-serif;
  font-weight: var(--dga-chip-font-weight);
  font-size: var(--dga-chip-font-size);
  line-height: var(--dga-chip-line-height);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.dga-chip__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--dga-chip-icon-size);
  height: var(--dga-chip-icon-size);
}

.dga-chip__icon img {
  width: 100%;
  height: 100%;
  display: block;
}

.dga-chip__label {
  display: inline-flex;
  align-items: center;
}

.dga-chip--neutral {
  --dga-chip-bg: var(--dga-neutral-100);
  --dga-chip-text: var(--dga-text-default);
  --dga-chip-hover-bg: var(--dga-neutral-200);
  --dga-chip-pressed-bg: var(--dga-neutral-300);
  --dga-chip-selected-bg: var(--dga-neutral-700);
  --dga-chip-selected-text: var(--dga-text-on-color);
}

.dga-chip--on-color {
  --dga-chip-bg: #ffffff;
  --dga-chip-text: var(--dga-text-default);
  --dga-chip-hover-bg: rgba(255, 255, 255, 0.8);
  --dga-chip-pressed-bg: rgba(255, 255, 255, 0.6);
  --dga-chip-selected-bg: rgba(255, 255, 255, 0.7);
  --dga-chip-selected-text: var(--dga-text-default);
  --dga-chip-disabled-bg: rgba(255, 255, 255, 0.2);
  --dga-chip-disabled-text: rgba(255, 255, 255, 0.4);
}

.dga-chip--small {
  --dga-chip-height: 20px;
  --dga-chip-font-size: var(--dga-text-2xs-size);
  --dga-chip-line-height: var(--dga-text-2xs-line);
  --dga-chip-font-weight: var(--dga-font-semibold);
}

.dga-chip--medium {
  --dga-chip-height: 24px;
  --dga-chip-font-size: var(--dga-text-xs-size);
  --dga-chip-line-height: var(--dga-text-xs-line);
  --dga-chip-font-weight: var(--dga-font-medium);
}

.dga-chip--large {
  --dga-chip-height: 32px;
  --dga-chip-font-size: var(--dga-text-md-size);
  --dga-chip-line-height: var(--dga-text-md-line);
  --dga-chip-font-weight: var(--dga-font-medium);
}

.dga-chip--rounded {
  --dga-chip-radius: var(--dga-radius-full);
}

.dga-chip--hovered {
  background: var(--dga-chip-hover-bg);
}

.dga-chip--pressed {
  background: var(--dga-chip-pressed-bg);
  color: var(--dga-900);
}

.dga-chip--selected {
  background: var(--dga-chip-selected-bg);
  color: var(--dga-chip-selected-text);
}

.dga-chip--focused::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 3px solid var(--dga-icon-default);
  border-radius: var(--dga-chip-radius);
  pointer-events: none;
}

.dga-chip--disabled,
.dga-chip:disabled {
  background: var(--dga-chip-disabled-bg);
  color: var(--dga-chip-disabled-text);
  cursor: not-allowed;
}

.dga-chip--disabled .dga-chip__icon,
.dga-chip:disabled .dga-chip__icon {
  opacity: 0.6;
}

.dga-chip--rtl {
  flex-direction: row-reverse;
}

.dga-chip--primary.dga-chip--pressed:not(.dga-chip--on-color) {
  color: var(--dga-900);
}

.dga-chip--neutral.dga-chip--pressed {
  color: var(--dga-text-default);
}
`;
  }
}

import { Component } from '@angular/core';
import { DgaButtonComponent } from '../../components/dga-button/dga-button.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type ButtonStyle =
  | 'primary'
  | 'neutral'
  | 'secondary-solid'
  | 'secondary-outline'
  | 'subtle'
  | 'transparent';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonState = 'default' | 'hovered' | 'pressed' | 'focused' | 'disabled';

@Component({
  selector: 'dga-button-playground',
  standalone: true,
  imports: [DgaButtonComponent, DgaPlaygroundComponent],
  templateUrl: './dga-button-playground.component.html',
  styleUrl: './dga-button-playground.component.scss'
})
export class DgaButtonPlaygroundComponent {
  readonly leadIconUrl = 'https://www.figma.com/api/mcp/asset/98c61095-9f6e-4f84-b1ac-c64038630c66';
  readonly trailIconUrl = 'https://www.figma.com/api/mcp/asset/5945472a-e913-446c-8de8-323db6335bd6';

  componentProps = {
    label: 'Button',
    variant: 'primary' as ButtonStyle,
    size: 'medium' as ButtonSize,
    state: 'default' as ButtonState,
    iconOnly: false,
    leadIcon: true,
    trailIcon: false,
    rtl: false,
    onColor: false,
    destructive: false,
    fullWidth: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Button',
    description: 'Interactive button component with multiple variants and states.',
    selector: 'dga-button',
    componentName: 'DgaButton',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      {
        key: 'variant',
        label: 'Variant',
        type: 'select',
        options: ['primary', 'neutral', 'secondary-solid', 'secondary-outline', 'subtle', 'transparent']
      },
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] },
      { key: 'state', label: 'State', type: 'select', options: ['default', 'hovered', 'pressed', 'focused', 'disabled'] }
    ],
    booleanFields: [
      { key: 'iconOnly', label: 'Icon only', type: 'boolean' },
      { key: 'leadIcon', label: 'Lead icon', type: 'boolean' },
      { key: 'trailIcon', label: 'Trail icon', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      { key: 'onColor', label: 'On color', type: 'boolean' },
      { key: 'destructive', label: 'Destructive', type: 'boolean' },
      { key: 'fullWidth', label: 'Full Width', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: any): string {
    const classes = ['dga-button', `dga-button--${props.variant}`, `dga-button--${props.size}`, `dga-button--${props.state}`];
    if (props.iconOnly) classes.push('dga-button--icon-only');
    if (props.rtl) classes.push('dga-button--rtl');
    if (props.onColor) classes.push('dga-button--on-color');
    if (props.destructive) classes.push('dga-button--destructive');
    if (props.fullWidth) classes.push('dga-button--full-width');

    const attrs: string[] = [`class="${classes.join(' ')}"`];
    if (props.rtl) attrs.push('dir="rtl"');
    if (props.state === 'disabled') attrs.push('disabled');
    if (props.iconOnly) attrs.push(`aria-label="${props.label}"`);

    const lines: string[] = [];
    lines.push(`<button ${attrs.join(' ')}>`); 
    if (props.iconOnly || props.leadIcon) {
      lines.push('  <span class="dga-button__icon" aria-hidden="true">');
      lines.push(`    <img src="${this.leadIconUrl}" alt="" />`);
      lines.push('  </span>');
    }
    if (!props.iconOnly) {
      lines.push(`  <span class="dga-button__label">${props.label}</span>`);
    }
    if (!props.iconOnly && props.trailIcon) {
      lines.push('  <span class="dga-button__icon" aria-hidden="true">');
      lines.push(`    <img src="${this.trailIconUrl}" alt="" />`);
      lines.push('  </span>');
    }
    lines.push('</button>');
    return lines.join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-button {
  --dga-button-bg: var(--dga-600);
  --dga-button-text: var(--dga-text-on-color);
  --dga-button-border: transparent;
  --dga-button-hover-bg: var(--dga-700);
  --dga-button-pressed-bg: var(--dga-800);
  --dga-button-focus: var(--dga-border-brand);
  --dga-button-height: 32px;
  --dga-button-padding-x: var(--dga-space-3);
  --dga-button-font-size: var(--dga-text-sm-size);
  --dga-button-line-height: var(--dga-text-sm-line);
  --dga-button-icon-size: 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--dga-space-1);
  height: var(--dga-button-height);
  min-height: var(--dga-button-height);
  padding: 0 var(--dga-button-padding-x);
  border-radius: var(--dga-radius-sm);
  border: 1px solid var(--dga-button-border);
  background: var(--dga-button-bg);
  color: var(--dga-button-text);
  font-family: var(--dga-font-text), sans-serif;
  font-weight: var(--dga-font-medium);
  font-size: var(--dga-button-font-size);
  line-height: var(--dga-button-line-height);
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
}

.dga-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--dga-button-icon-size);
  height: var(--dga-button-icon-size);
}

.dga-button__icon img {
  width: 100%;
  height: 100%;
  display: block;
}

.dga-button__label {
  display: inline-flex;
  align-items: center;
}

.dga-button--small {
  --dga-button-height: 24px;
  --dga-button-padding-x: var(--dga-space-2);
  --dga-button-font-size: var(--dga-text-xs-size);
  --dga-button-line-height: var(--dga-text-xs-line);
  --dga-button-icon-size: 20px;
}

.dga-button--medium {
  --dga-button-height: 32px;
  --dga-button-padding-x: var(--dga-space-3);
  --dga-button-font-size: var(--dga-text-sm-size);
  --dga-button-line-height: var(--dga-text-sm-line);
  --dga-button-icon-size: 24px;
}

.dga-button--large {
  --dga-button-height: 40px;
  --dga-button-padding-x: var(--dga-space-4);
  --dga-button-font-size: var(--dga-text-sm-size);
  --dga-button-line-height: var(--dga-text-sm-line);
  --dga-button-icon-size: 24px;
}

.dga-button--neutral {
  --dga-button-bg: var(--dga-bg-card);
  --dga-button-text: var(--dga-text-default);
  --dga-button-border: var(--dga-border-neutral-primary);
  --dga-button-hover-bg: var(--dga-bg-neutral-100);
  --dga-button-pressed-bg: var(--dga-neutral-200);
}

.dga-button--secondary-solid {
  --dga-button-bg: var(--dga-bg-neutral-100);
  --dga-button-text: var(--dga-text-default);
  --dga-button-border: transparent;
  --dga-button-hover-bg: var(--dga-neutral-200);
  --dga-button-pressed-bg: var(--dga-neutral-300);
}

.dga-button--secondary-outline {
  --dga-button-bg: transparent;
  --dga-button-text: var(--dga-text-default);
  --dga-button-border: var(--dga-border-neutral-primary);
  --dga-button-hover-bg: var(--dga-bg-neutral-100);
  --dga-button-pressed-bg: var(--dga-neutral-200);
}

.dga-button--subtle {
  --dga-button-bg: var(--dga-bg-brand-light);
  --dga-button-text: var(--dga-text-brand-secondary);
  --dga-button-border: transparent;
  --dga-button-hover-bg: var(--dga-100);
  --dga-button-pressed-bg: var(--dga-200);
}

.dga-button--transparent {
  --dga-button-bg: transparent;
  --dga-button-text: var(--dga-text-brand-secondary);
  --dga-button-border: transparent;
  --dga-button-hover-bg: var(--dga-bg-brand-light);
  --dga-button-pressed-bg: var(--dga-100);
}

.dga-button--on-color.dga-button--neutral,
.dga-button--on-color.dga-button--secondary-outline,
.dga-button--on-color.dga-button--transparent,
.dga-button--on-color.dga-button--subtle {
  --dga-button-text: var(--dga-text-on-color);
  --dga-button-border: rgba(255, 255, 255, 0.4);
  --dga-button-hover-bg: rgba(255, 255, 255, 0.12);
  --dga-button-pressed-bg: rgba(255, 255, 255, 0.2);
}

.dga-button--destructive {
  --dga-button-focus: var(--dga-error-600);
}

.dga-button--destructive.dga-button--primary {
  --dga-button-bg: var(--dga-error-600);
  --dga-button-text: var(--dga-text-on-color);
  --dga-button-hover-bg: var(--dga-error-700);
  --dga-button-pressed-bg: var(--dga-error-800);
}

.dga-button--destructive.dga-button--secondary-solid {
  --dga-button-bg: var(--dga-error-50);
  --dga-button-text: var(--dga-text-error);
  --dga-button-hover-bg: var(--dga-error-100);
  --dga-button-pressed-bg: var(--dga-error-200);
}

.dga-button--destructive.dga-button--secondary-outline,
.dga-button--destructive.dga-button--transparent,
.dga-button--destructive.dga-button--subtle {
  --dga-button-text: var(--dga-text-error);
  --dga-button-border: var(--dga-error-600);
  --dga-button-hover-bg: var(--dga-error-50);
  --dga-button-pressed-bg: var(--dga-error-100);
}

.dga-button--hovered {
  background: var(--dga-button-hover-bg);
}

.dga-button--pressed {
  background: var(--dga-button-pressed-bg);
}

.dga-button--focused {
  box-shadow: 0 0 0 2px var(--dga-button-focus);
}

.dga-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.dga-button--icon-only {
  padding: 0;
  width: var(--dga-button-height);
}

.dga-button--rtl {
  flex-direction: row-reverse;
}

.dga-button--full-width {
  width: 100%;
}
`;
  }
}

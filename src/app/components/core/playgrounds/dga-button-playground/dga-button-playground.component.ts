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
    const classes = ['dga-button', `dga-button--${props.variant}`, `dga-button--${props.size}`];
    classes.push(props.state === 'disabled' ? 'dga-button--disabled' : `dga-button--${props.state}`);
    if (props.iconOnly) classes.push('dga-button--icon-only');
    if (props.rtl) classes.push('dga-button--rtl');
    if (props.onColor) classes.push('dga-button--on-color');
    if (props.destructive) classes.push('dga-button--destructive');
    if (props.fullWidth) classes.push('dga-button--full-width');

    const attrs: string[] = [`class="${classes.join(' ')}"`];
    attrs.push(`dir="${props.rtl ? 'rtl' : 'ltr'}"`);
    if (props.state === 'disabled') attrs.push('disabled');
    if (props.iconOnly) attrs.push(`aria-label="${props.label}"`);

    const lines: string[] = [];
    lines.push(`<button ${attrs.join(' ')}>`); 
    if (props.iconOnly || props.leadIcon) {
      lines.push('  <span class="dga-button__icon" aria-hidden="true"></span>');
    }
    if (!props.iconOnly) {
      lines.push(`  <span class="dga-button__label" dir="auto">${props.label}</span>`);
    }
    if (!props.iconOnly && props.trailIcon) {
      lines.push('  <span class="dga-button__icon" aria-hidden="true"></span>');
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
  --dga-button-pressed-bg: var(--dga-900);
  --dga-button-focus-outer: var(--dga-text-default);
  --dga-button-focus-inner: var(--dga-text-on-color);
  --dga-button-height: 32px;
  --dga-button-padding-x: var(--dga-space-3);
  --dga-button-font-size: var(--dga-text-sm-size);
  --dga-button-line-height: var(--dga-text-sm-line);
  --dga-button-icon-size: 20px;
  --dga-button-icon-mask: url('https://www.figma.com/api/mcp/asset/001b7e4c-9db6-4263-8f2a-df32f13695d3');

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
  white-space: nowrap;
  position: relative;
  overflow: clip;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
}

.dga-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--dga-button-icon-size);
  height: var(--dga-button-icon-size);
  flex-shrink: 0;
}

.dga-button__icon::before {
  content: '';
  width: 100%;
  height: 100%;
  background: currentColor;
  -webkit-mask-image: var(--dga-button-icon-mask);
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-image: var(--dga-button-icon-mask);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
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
  --dga-button-icon-size: 16px;
}

.dga-button--medium {
  --dga-button-height: 32px;
  --dga-button-padding-x: var(--dga-space-3);
  --dga-button-font-size: var(--dga-text-sm-size);
  --dga-button-line-height: var(--dga-text-sm-line);
  --dga-button-icon-size: 20px;
}

.dga-button--large {
  --dga-button-height: 40px;
  --dga-button-padding-x: var(--dga-space-4);
  --dga-button-font-size: var(--dga-text-md-size);
  --dga-button-line-height: var(--dga-text-md-line);
  --dga-button-icon-size: 24px;
}

.dga-button--neutral {
  --dga-button-bg: var(--dga-neutral-950);
  --dga-button-text: var(--dga-text-on-color);
  --dga-button-border: transparent;
  --dga-button-hover-bg: var(--dga-neutral-900);
  --dga-button-pressed-bg: var(--dga-neutral-800);
}

.dga-button--secondary-solid {
  --dga-button-bg: var(--dga-neutral-100);
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
  --dga-button-bg: transparent;
  --dga-button-text: var(--dga-text-default);
  --dga-button-border: transparent;
  --dga-button-hover-bg: var(--dga-neutral-100);
  --dga-button-pressed-bg: var(--dga-neutral-200);
}

.dga-button--transparent {
  --dga-button-bg: transparent;
  --dga-button-text: var(--dga-text-default);
  --dga-button-border: transparent;
  --dga-button-hover-bg: var(--dga-neutral-100);
  --dga-button-pressed-bg: var(--dga-neutral-200);
}

.dga-button--on-color.dga-button--primary,
.dga-button--on-color.dga-button--neutral {
  --dga-button-bg: var(--dga-bg-card);
  --dga-button-text: var(--dga-text-default);
  --dga-button-border: transparent;
  --dga-button-hover-bg: var(--dga-neutral-100);
  --dga-button-pressed-bg: var(--dga-neutral-200);
}

.dga-button--on-color.dga-button--secondary-solid {
  --dga-button-bg: rgba(255, 255, 255, 0.2);
  --dga-button-text: var(--dga-text-on-color);
  --dga-button-border: transparent;
  --dga-button-hover-bg: rgba(255, 255, 255, 0.24);
  --dga-button-pressed-bg: rgba(255, 255, 255, 0.32);
}

.dga-button--on-color.dga-button--secondary-outline {
  --dga-button-bg: transparent;
  --dga-button-text: var(--dga-text-on-color);
  --dga-button-border: rgba(255, 255, 255, 0.4);
  --dga-button-hover-bg: rgba(255, 255, 255, 0.12);
  --dga-button-pressed-bg: rgba(255, 255, 255, 0.2);
}

.dga-button--on-color.dga-button--subtle,
.dga-button--on-color.dga-button--transparent {
  --dga-button-bg: transparent;
  --dga-button-text: var(--dga-text-on-color);
  --dga-button-border: transparent;
  --dga-button-hover-bg: rgba(255, 255, 255, 0.12);
  --dga-button-pressed-bg: rgba(255, 255, 255, 0.2);
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

.dga-button--destructive.dga-button--secondary-outline {
  --dga-button-text: var(--dga-text-error);
  --dga-button-border: var(--dga-error-600);
  --dga-button-hover-bg: var(--dga-error-50);
  --dga-button-pressed-bg: var(--dga-error-100);
}

.dga-button--destructive.dga-button--transparent,
.dga-button--destructive.dga-button--subtle {
  --dga-button-text: var(--dga-text-error);
  --dga-button-border: transparent;
  --dga-button-hover-bg: var(--dga-error-50);
  --dga-button-pressed-bg: var(--dga-error-100);
}

.dga-button:not(:disabled):hover,
.dga-button--hovered {
  background: var(--dga-button-hover-bg);
}

.dga-button:not(:disabled):active,
.dga-button--pressed {
  background: var(--dga-button-pressed-bg);
}

.dga-button:not(:disabled):focus-visible,
.dga-button--focused {
  box-shadow:
    0 0 0 2px var(--dga-button-focus-outer),
    inset 0 0 0 1px var(--dga-button-focus-inner);
}

.dga-button--disabled {
  --dga-button-bg: var(--dga-neutral-200);
  --dga-button-text: var(--dga-neutral-400);
  --dga-button-border: transparent;
  --dga-button-hover-bg: var(--dga-neutral-200);
  --dga-button-pressed-bg: var(--dga-neutral-200);
  cursor: not-allowed;
  pointer-events: none;
}

.dga-button--disabled.dga-button--secondary-outline {
  --dga-button-border: var(--dga-neutral-200);
}

.dga-button--icon-only {
  padding: 0;
  width: var(--dga-button-height);
  min-width: var(--dga-button-height);
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

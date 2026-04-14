import { Component } from '@angular/core';
import { DgaCardComponent } from '../../components/dga-card/dga-card.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type Variant = 'default' | 'image' | 'expandable' | 'selectable';
type Effect = 'shadow' | 'none' | 'stroke';
type State = 'default' | 'hover' | 'focused' | 'disabled';

@Component({
  selector: 'dga-card-playground',
  standalone: true,
  imports: [DgaCardComponent, DgaPlaygroundComponent],
  templateUrl: './dga-card-playground.component.html',
  styleUrl: './dga-card-playground.component.scss'
})
export class DgaCardPlaygroundComponent {
  readonly imageUrl = 'https://www.figma.com/api/mcp/asset/e162f47d-bf90-4ee0-ae7b-a4ea96e341e1';

  componentProps = {
    title: 'Card Title',
    description: 'Card content placeholder text goes here',
    primaryActionLabel: 'Action',
    secondaryActionLabel: 'Action',
    imageSrc: this.imageUrl,
    imageAlt: 'Card image',
    variant: 'default' as Variant,
    effect: 'shadow' as Effect,
    state: 'default' as State,
    rtl: false,
    expanded: false,
    selected: false
  };

  playgroundConfig: PlaygroundConfig = {
    title: 'Card',
    description: 'Preview default, image, expandable, and selectable cards from the system matrix.',
    selector: 'dga-card',
    componentName: 'DgaCard',
    textFields: [
      { key: 'title', label: 'Title', type: 'text' },
      {
        key: 'primaryActionLabel',
        label: 'Primary action',
        type: 'text',
        visibleWhen: (props) => props.variant === 'default' || props.variant === 'image'
      },
      {
        key: 'secondaryActionLabel',
        label: 'Secondary action',
        type: 'text',
        visibleWhen: (props) => props.variant === 'default' || props.variant === 'image'
      },
      {
        key: 'imageSrc',
        label: 'Image source',
        type: 'text',
        visibleWhen: (props) => props.variant === 'image'
      },
      {
        key: 'imageAlt',
        label: 'Image alt',
        type: 'text',
        visibleWhen: (props) => props.variant === 'image'
      }
    ],
    textareaFields: [
      { key: 'description', label: 'Description', type: 'textarea' }
    ],
    selectFields: [
      {
        key: 'variant',
        label: 'Variant',
        type: 'select',
        options: ['default', 'image', 'expandable', 'selectable']
      },
      { 
        key: 'effect', 
        label: 'Effect', 
        type: 'select', 
        options: ['shadow', 'none', 'stroke'] 
      },
      { 
        key: 'state', 
        label: 'State', 
        type: 'select', 
        options: ['default', 'hover', 'focused', 'disabled'] 
      }
    ],
    booleanFields: [
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      {
        key: 'expanded',
        label: 'Expanded',
        type: 'boolean',
        visibleWhen: (props) => props.variant === 'expandable'
      },
      {
        key: 'selected',
        label: 'Selected',
        type: 'boolean',
        visibleWhen: (props) => props.variant === 'selectable'
      }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: any): string {
    const lines: string[] = [];
    lines.push('<dga-card');
    lines.push(`  title="${props.title}"`);
    lines.push(`  description="${props.description}"`);
    lines.push(`  variant="${props.variant}"`);
    lines.push(`  effect="${props.effect}"`);
    lines.push(`  state="${props.state}"`);

    if (props.variant === 'default') {
      lines.push(`  primaryActionLabel="${props.primaryActionLabel}"`);
      lines.push(`  secondaryActionLabel="${props.secondaryActionLabel}"`);
    }

    if (props.variant === 'image') {
      lines.push(`  imageSrc="${props.imageSrc}"`);
      lines.push(`  imageAlt="${props.imageAlt}"`);
      lines.push(`  primaryActionLabel="${props.primaryActionLabel}"`);
      lines.push(`  secondaryActionLabel="${props.secondaryActionLabel}"`);
    }

    if (props.rtl) {
      lines.push('  [rtl]="true"');
    }

    if (props.variant === 'expandable' && props.expanded) {
      lines.push('  [expanded]="true"');
    }

    if (props.variant === 'selectable' && props.selected) {
      lines.push('  [selected]="true"');
    }

    lines.push('/>');
    return lines.join('\n');
  }

  generateCssSnippet(): string {
    return `.card {
  --dga-card-bg: var(--dga-bg-card);
  --dga-card-border: transparent;
  --dga-card-shadow: 0 4px 8px 0 rgba(16, 24, 40, 0.1), 0 2px 4px 0 rgba(16, 24, 40, 0.06);
  --dga-card-title-color: var(--dga-text-display);
  --dga-card-description-color: var(--dga-text-display);
  --dga-card-status-bg: var(--dga-bg-brand-light);
  --dga-card-status-color: var(--dga-icon-primary);
  --dga-card-select-border: var(--dga-text-default);
  --dga-card-select-bg: transparent;
  --dga-card-select-color: var(--dga-text-on-color);
  --dga-card-toggle-opacity: 1;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--dga-space-6);
  width: min(100%, 360px);
  min-height: 228px;
  padding: var(--dga-space-4);
  border-radius: var(--dga-radius-lg);
  border: 1px solid var(--dga-card-border);
  background: var(--dga-card-bg);
  box-shadow: var(--dga-card-shadow);
  color: var(--dga-card-description-color);
  font-family: var(--dga-font-text), sans-serif;
  transition: box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

.card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow:
    0 0 0 2px var(--dga-text-default),
    inset 0 0 0 1px var(--dga-bg-card);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.card--none {
  --dga-card-shadow: none;
  --dga-card-border: var(--dga-border-neutral-secondary);
}

.card--stroke {
  --dga-card-shadow: none;
  --dga-card-border: var(--dga-border-neutral-primary);
}

.card--image {
  overflow: hidden;
}

.card--selectable {
  min-height: 164px;
}

.card--interactive:not(.card--disabled).card--shadow:hover,
.card--hover.card--shadow {
  --dga-card-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.1), 0 4px 6px -2px rgba(16, 24, 40, 0.06);
}

.card--interactive:not(.card--disabled).card--none:hover,
.card--hover.card--none {
  --dga-card-border: var(--dga-border-neutral-primary);
}

.card--interactive:not(.card--disabled).card--stroke:hover,
.card--hover.card--stroke {
  --dga-card-border: var(--dga-neutral-500);
}

.card--interactive:not(.card--disabled):focus-within::after,
.card--focused::after {
  opacity: 1;
}

.card--disabled {
  --dga-card-bg: var(--dga-neutral-100);
  --dga-card-border: var(--dga-neutral-200);
  --dga-card-shadow: none;
  --dga-card-title-color: var(--dga-neutral-400);
  --dga-card-description-color: var(--dga-neutral-400);
  --dga-card-status-bg: var(--dga-bg-card);
  --dga-card-status-color: var(--dga-neutral-400);
  --dga-card-select-border: var(--dga-neutral-400);
  --dga-card-toggle-opacity: 0.65;
  pointer-events: none;
}

.card--rtl {
  text-align: right;
}

.card__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 48px;
  gap: var(--dga-space-4);
}

.card--rtl .card__head {
  flex-direction: row-reverse;
}

.card__status {
  width: 48px;
  height: 48px;
  border-radius: var(--dga-radius-full);
  background: var(--dga-card-status-bg);
  display: grid;
  place-items: center;
  color: var(--dga-card-status-color);
  flex-shrink: 0;
}

.card__status-svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.card__status-image {
  width: 24px;
  height: 24px;
  display: block;
}

.card__media {
  margin: calc(var(--dga-space-4) * -1) calc(var(--dga-space-4) * -1) 0;
  height: 250px;
  overflow: hidden;
}

.card__media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.card__body {
  display: flex;
  flex-direction: column;
  gap: var(--dga-space-2);
  flex: 1 1 auto;
  text-align: inherit;
}

.card__title {
  font-size: var(--dga-text-lg-size);
  line-height: var(--dga-text-lg-line);
  font-weight: var(--dga-font-bold);
  color: var(--dga-card-title-color);
  margin: 0;
}

.card__desc {
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
  color: var(--dga-card-description-color);
  margin: 0;
}

.card__actions {
  display: flex;
  align-items: center;
  gap: var(--dga-space-2);
  margin-top: auto;
  flex-wrap: wrap;
}

.card__actions dga-button {
  display: inline-flex;
}

.card--rtl .card__actions {
  flex-direction: row-reverse;
}

.card__select,
.card__toggle {
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.card__select:focus-visible,
.card__toggle:focus-visible {
  outline: none;
}

.card__select {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid var(--dga-card-select-border);
  background: var(--dga-card-select-bg);
  color: var(--dga-card-select-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.card__select--selected {
  background: var(--dga-600);
  border-color: var(--dga-600);
}

.card__select-icon {
  width: 12px;
  height: 12px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.card__toggle {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-top: auto;
  border-radius: var(--dga-radius-full);
  opacity: var(--dga-card-toggle-opacity);
}

.card--rtl .card__toggle {
  align-self: flex-start;
}

.card__toggle img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}
`;
  }
}

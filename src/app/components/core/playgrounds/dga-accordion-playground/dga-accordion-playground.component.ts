import { Component } from '@angular/core';
import { DgaAccordionComponent } from '../../components/dga-accordion/dga-accordion.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type AccordionSize = 'small' | 'medium' | 'large';
type AccordionState = 'default' | 'hovered' | 'pressed' | 'focused' | 'disabled';
type AccordionIconAlignment = 'leading' | 'trailing';

@Component({
  selector: 'dga-accordion-playground',
  standalone: true,
  imports: [DgaAccordionComponent, DgaPlaygroundComponent],
  templateUrl: './dga-accordion-playground.component.html',
  styleUrl: './dga-accordion-playground.component.scss'
})
export class DgaAccordionPlaygroundComponent {
  readonly iconDownUrl = 'https://www.figma.com/api/mcp/asset/f1c4c68d-5bdf-4410-b13f-6d864414de4b';
  readonly iconUpUrl = 'https://www.figma.com/api/mcp/asset/9e734a9f-d2b0-4863-a45b-2b71e554688c';
  readonly iconDownDisabledUrl = 'https://www.figma.com/api/mcp/asset/3de58b1c-6221-4226-9cb4-ae654e7021e6';
  readonly iconUpDisabledUrl = 'https://www.figma.com/api/mcp/asset/22465341-4f21-4317-a9e6-bb959e3965ea';

  componentProps = {
    title: 'Accordion Title',
    content: 'The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.',
    expanded: true,
    disabled: false,
    size: 'medium' as AccordionSize,
    state: 'default' as AccordionState,
    iconAlignment: 'trailing' as AccordionIconAlignment,
    flush: false,
    rtl: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Accordion',
    description: 'Expandable content sections with size, icon alignment, and state variants.',
    selector: 'dga-accordion',
    componentName: 'DgaAccordion',
    textFields: [
      { key: 'title', label: 'Title', type: 'text' }
    ],
    textareaFields: [
      { key: 'content', label: 'Content', type: 'textarea' }
    ],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] },
      { key: 'state', label: 'State', type: 'select', options: ['default', 'hovered', 'pressed', 'focused', 'disabled'] },
      { key: 'iconAlignment', label: 'Icon alignment', type: 'select', options: ['leading', 'trailing'] }
    ],
    booleanFields: [
      { key: 'expanded', label: 'Expanded', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' },
      { key: 'flush', label: 'Flush', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: any): string {
    const isDisabled = props.disabled || props.state === 'disabled';
    const isIconLeft = (!props.rtl && props.iconAlignment === 'leading')
      || (props.rtl && props.iconAlignment === 'trailing');
    const iconUrl = props.expanded
      ? (isDisabled ? this.iconUpDisabledUrl : this.iconUpUrl)
      : (isDisabled ? this.iconDownDisabledUrl : this.iconDownUrl);
    const classes = [
      'dga-accordion',
      `dga-accordion--${props.size}`,
      `dga-accordion--${props.state}`,
      props.expanded ? 'dga-accordion--expanded' : '',
      isDisabled ? 'dga-accordion--disabled' : '',
      props.flush ? 'dga-accordion--flush' : '',
      props.rtl ? 'dga-accordion--rtl' : '',
      props.iconAlignment === 'leading'
        ? 'dga-accordion--icon-leading'
        : 'dga-accordion--icon-trailing',
      isIconLeft ? 'dga-accordion--icon-left' : 'dga-accordion--icon-right'
    ].filter(Boolean);

    const lines: string[] = [];
    lines.push(`<div class="${classes.join(' ')}" dir="${props.rtl ? 'rtl' : 'ltr'}">`);
    lines.push(`  <button class="dga-accordion__header" type="button"${isDisabled ? ' disabled' : ''} aria-expanded="${props.expanded}">`);
    if (isIconLeft) {
      lines.push('    <span class="dga-accordion__icon" aria-hidden="true">');
      lines.push(`      <img src="${iconUrl}" alt="" />`);
      lines.push('    </span>');
    }
    lines.push(`    <span class="dga-accordion__title">${props.title}</span>`);
    if (!isIconLeft) {
      lines.push('    <span class="dga-accordion__icon" aria-hidden="true">');
      lines.push(`      <img src="${iconUrl}" alt="" />`);
      lines.push('    </span>');
    }
    lines.push('  </button>');
    if (props.expanded) {
      lines.push('  <div class="dga-accordion__content">');
      lines.push(`    ${props.content}`);
      lines.push('  </div>');
    }
    lines.push('</div>');
    return lines.join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-accordion {
  --dga-accordion-header-block-padding: var(--dga-space-3);
  --dga-accordion-header-inline-padding: var(--dga-space-4);
  --dga-accordion-header-bg: var(--dga-bg-card);
  --dga-accordion-title-color: var(--dga-text-default);
  --dga-accordion-content-color: var(--dga-neutral-700);
  --dga-accordion-content-padding-left: var(--dga-space-4);
  --dga-accordion-content-padding-right: var(--dga-space-4);
  border-top: 1px solid var(--dga-border-neutral-primary);
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: var(--dga-font-text), sans-serif;
  color: var(--dga-text-default);
  background: var(--dga-bg-card);
}

.dga-accordion__header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--dga-space-4);
  padding: var(--dga-accordion-header-block-padding) var(--dga-accordion-header-inline-padding);
  cursor: pointer;
  background: var(--dga-accordion-header-bg);
  border: 0;
  color: inherit;
  font: inherit;
  text-align: inherit;
}

.dga-accordion__title {
  flex: 1 1 auto;
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
  font-weight: var(--dga-font-semibold);
  color: var(--dga-accordion-title-color);
  text-align: start;
}

.dga-accordion__icon {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dga-accordion__icon img {
  width: 100%;
  height: 100%;
  display: block;
}

.dga-accordion__content {
  padding:
    var(--dga-space-2)
    var(--dga-accordion-content-padding-right)
    var(--dga-space-6)
    var(--dga-accordion-content-padding-left);
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
  font-weight: var(--dga-font-regular);
  color: var(--dga-accordion-content-color);
  text-align: start;
}

.dga-accordion--small {
  --dga-accordion-header-block-padding: var(--dga-space-2);
}

.dga-accordion--large {
  --dga-accordion-header-block-padding: var(--dga-space-4);
}

.dga-accordion--icon-left {
  --dga-accordion-content-padding-left: var(--dga-space-12);
  --dga-accordion-content-padding-right: var(--dga-space-4);
}

.dga-accordion--icon-right {
  --dga-accordion-content-padding-left: var(--dga-space-4);
  --dga-accordion-content-padding-right: var(--dga-space-12);
}

.dga-accordion--rtl {
  text-align: right;
}

.dga-accordion--hovered {
  --dga-accordion-header-bg: var(--dga-bg-neutral-100);
}

.dga-accordion--pressed {
  --dga-accordion-header-bg: var(--dga-neutral-200);
}

.dga-accordion--focused .dga-accordion__header {
  box-shadow: inset 0 0 0 2px var(--dga-text-default);
}

.dga-accordion--disabled {
  --dga-accordion-header-bg: var(--dga-bg-card);
  --dga-accordion-title-color: var(--dga-neutral-400);
  --dga-accordion-content-color: var(--dga-neutral-400);
}

.dga-accordion--disabled .dga-accordion__header {
  cursor: default;
  box-shadow: none;
}

.dga-accordion--flush {
  --dga-accordion-header-inline-padding: var(--dga-space-none);
}

.dga-accordion--flush.dga-accordion--icon-left {
  --dga-accordion-content-padding-right: var(--dga-space-none);
}

.dga-accordion--flush.dga-accordion--icon-right {
  --dga-accordion-content-padding-left: var(--dga-space-none);
}

.dga-accordion__header:focus-visible {
  outline: none;
}
`;
  }
}

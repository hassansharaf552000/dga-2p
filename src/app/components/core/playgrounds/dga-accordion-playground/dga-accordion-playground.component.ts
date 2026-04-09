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
  readonly iconDownUrl = 'https://www.figma.com/api/mcp/asset/69724734-7623-4128-a397-08aff0f6c129';
  readonly iconUpUrl = 'https://www.figma.com/api/mcp/asset/7c3da458-b38d-4d72-b395-9caae32f86ed';

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
    const classes = [
      'dga-accordion',
      `dga-accordion--${props.size}`,
      `dga-accordion--${props.state}`,
      props.expanded ? 'dga-accordion--expanded' : '',
      props.disabled || props.state === 'disabled' ? 'dga-accordion--disabled' : '',
      props.flush ? 'dga-accordion--flush' : '',
      props.rtl ? 'dga-accordion--rtl' : '',
      props.iconAlignment === 'leading'
        ? 'dga-accordion--icon-leading'
        : 'dga-accordion--icon-trailing'
    ].filter(Boolean);

    const lines: string[] = [];
    lines.push(`<div class="${classes.join(' ')}"${props.rtl ? ' dir="rtl"' : ''}>`);
    lines.push('  <div class="dga-accordion__header">');
    lines.push(`    <span class="dga-accordion__title">${props.title}</span>`);
    lines.push('    <span class="dga-accordion__icon" aria-hidden="true">');
    lines.push(`      <img src="${props.expanded ? this.iconUpUrl : this.iconDownUrl}" alt="" />`);
    lines.push('    </span>');
    lines.push('  </div>');
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
  border-top: 1px solid var(--dga-border-neutral-primary);
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: var(--dga-font-text), sans-serif;
  color: var(--dga-text-default);
}

.dga-accordion__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--dga-space-3);
  padding: var(--dga-space-3) var(--dga-space-4);
  cursor: pointer;
  background: var(--dga-bg-card);
}

.dga-accordion__title {
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
  font-weight: var(--dga-font-semibold);
}

.dga-accordion__icon {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.dga-accordion__icon img {
  width: 100%;
  height: 100%;
  display: block;
}

.dga-accordion__content {
  padding: var(--dga-space-2) var(--dga-space-6) var(--dga-space-6) var(--dga-space-4);
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
  font-weight: var(--dga-font-regular);
  color: var(--dga-neutral-700);
}

.dga-accordion--small .dga-accordion__header {
  padding: var(--dga-space-2) var(--dga-space-4);
}

.dga-accordion--large .dga-accordion__header {
  padding: var(--dga-space-4) var(--dga-space-4);
}

.dga-accordion--icon-leading .dga-accordion__header {
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.dga-accordion--rtl {
  direction: rtl;
  text-align: right;
}

.dga-accordion--rtl .dga-accordion__header {
  flex-direction: row-reverse;
}

.dga-accordion--hovered .dga-accordion__header {
  background: #f3f4f6;
}

.dga-accordion--pressed .dga-accordion__header {
  background: #e5e7eb;
}

.dga-accordion--focused .dga-accordion__header {
  outline: 2px solid #161616;
  outline-offset: -2px;
}

.dga-accordion--disabled {
  opacity: 0.5;
  pointer-events: none;
}

.dga-accordion--flush {
  border-top-color: var(--dga-border-neutral-secondary);
}

.dga-accordion--flush .dga-accordion__header,
.dga-accordion--flush .dga-accordion__content {
  padding-left: 0;
  padding-right: 0;
}
`;
  }
}

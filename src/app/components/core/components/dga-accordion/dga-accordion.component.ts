import { Component, Input } from '@angular/core';

type AccordionSize = 'small' | 'medium' | 'large';
type AccordionState = 'default' | 'hovered' | 'pressed' | 'focused' | 'disabled';
type AccordionIconAlignment = 'leading' | 'trailing';

@Component({
  selector: 'dga-accordion',
  standalone: true,
  imports: [],
  templateUrl: './dga-accordion.component.html',
  styleUrl: './dga-accordion.component.scss'
})
export class DgaAccordionComponent {
  @Input() title = 'Accordion Title';
  @Input() content = 'Accordion content goes here';
  @Input() expanded = false;
  @Input() disabled = false;
  @Input() size: AccordionSize = 'medium';
  @Input() state: AccordionState = 'default';
  @Input() iconAlignment: AccordionIconAlignment = 'trailing';
  @Input() flush = false;
  @Input() rtl = false;

  readonly iconDownUrl =
    'https://www.figma.com/api/mcp/asset/69724734-7623-4128-a397-08aff0f6c129';
  readonly iconUpUrl =
    'https://www.figma.com/api/mcp/asset/7c3da458-b38d-4d72-b395-9caae32f86ed';

  get accordionClasses(): string[] {
    return [
      'dga-accordion',
      `dga-accordion--${this.size}`,
      `dga-accordion--${this.state}`,
      this.expanded ? 'dga-accordion--expanded' : '',
      this.disabled || this.state === 'disabled' ? 'dga-accordion--disabled' : '',
      this.flush ? 'dga-accordion--flush' : '',
      this.rtl ? 'dga-accordion--rtl' : '',
      this.iconAlignment === 'leading'
        ? 'dga-accordion--icon-leading'
        : 'dga-accordion--icon-trailing'
    ].filter(Boolean);
  }
}

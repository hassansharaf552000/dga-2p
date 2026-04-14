import { Component, Input } from '@angular/core';

type AccordionSize = 'small' | 'medium' | 'large';
type AccordionState = 'default' | 'hovered' | 'pressed' | 'focused' | 'disabled';
type AccordionIconAlignment = 'leading' | 'trailing';

let nextAccordionId = 0;

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

  readonly contentId = `dga-accordion-content-${nextAccordionId++}`;
  readonly iconDownUrl = 'assets/icons/down.svg';
  readonly iconUpUrl = 'assets/icons/up.svg';
  readonly iconDownDisabledUrl = 'assets/icons/arrow-down-disable.svg'; 
  readonly iconUpDisabledUrl = 'assets/icons/arrow-up-disable.svg';

  get accordionClasses(): string[] {
    return [
      'dga-accordion',
      `dga-accordion--${this.size}`,
      `dga-accordion--${this.state}`,
      this.expanded ? 'dga-accordion--expanded' : '',
      this.isDisabled ? 'dga-accordion--disabled' : '',
      this.flush ? 'dga-accordion--flush' : '',
      this.rtl ? 'dga-accordion--rtl' : '',
      this.iconAlignment === 'leading'
        ? 'dga-accordion--icon-leading'
        : 'dga-accordion--icon-trailing',
      this.isIconLeft ? 'dga-accordion--icon-left' : 'dga-accordion--icon-right'
    ].filter(Boolean);
  }

  get isDisabled(): boolean {
    return this.disabled || this.state === 'disabled';
  }

  get isIconLeft(): boolean {
    return (!this.rtl && this.iconAlignment === 'leading')
      || (this.rtl && this.iconAlignment === 'trailing');
  }

  get iconUrl(): string {
    if (this.expanded) {
      return this.isDisabled ? this.iconUpDisabledUrl : this.iconUpUrl;
    }

    return this.isDisabled ? this.iconDownDisabledUrl : this.iconDownUrl;
  }

  toggle(): void {
    if (!this.isDisabled) {
      this.expanded = !this.expanded;
    }
  }
}

import { Component, Input } from '@angular/core';
import { DgaButtonComponent } from '../../../core/components/dga-button/dga-button.component';

type CardVariant = 'default' | 'image' | 'expandable' | 'selectable';
type CardEffect = 'shadow' | 'none' | 'stroke';
type CardState = 'default' | 'hover' | 'focused' | 'disabled';

@Component({
  selector: 'dga-card',
  standalone: true,
  imports: [DgaButtonComponent],
  templateUrl: './dga-card.component.html',
  styleUrl: './dga-card.component.scss'
})
export class DgaCardComponent {
  @Input() title = 'Card Title';
  @Input() description = 'Card content placeholder text goes here';
  @Input() primaryActionLabel = 'Action';
  @Input() secondaryActionLabel = 'Action';
  @Input() imageSrc = 'https://www.figma.com/api/mcp/asset/e162f47d-bf90-4ee0-ae7b-a4ea96e341e1';
  @Input() imageAlt = 'Card image';
  @Input() variant: CardVariant = 'default';
  @Input() effect: CardEffect = 'shadow';
  @Input() state: CardState = 'default';
  @Input() rtl = false;
  @Input() expanded = false;
  @Input() selected = false;
  @Input() disabled = false;

  protected readonly iconDownUrl = 'assets/icons/down.svg';
  protected readonly iconUpUrl = 'assets/icons/up.svg';
  protected readonly iconDownDisabledUrl = 'assets/icons/arrow-down-disable.svg';
  protected readonly iconUpDisabledUrl = 'assets/icons/arrow-up-disable.svg';
  protected readonly featuredIconUrl =
    'https://www.figma.com/api/mcp/asset/e4ce3402-c7a9-4d4d-a135-923d31b89aa5';

  get cardClasses(): string[] {
    const stateClass = this.isDisabled ? 'card--disabled' : `card--${this.state}`;

    return [
      'card',
      `card--${this.variant}`,
      `card--${this.effect}`,
      stateClass,
      this.isInteractive ? 'card--interactive' : '',
      this.isExpandable && this.expanded ? 'card--expanded' : '',
      this.isSelectable && this.selected ? 'card--selected' : '',
      this.rtl ? 'card--rtl' : ''
    ].filter(Boolean);
  }

  get isDefault(): boolean {
    return this.variant === 'default';
  }

  get isImage(): boolean {
    return this.variant === 'image';
  }

  get isExpandable(): boolean {
    return this.variant === 'expandable';
  }

  get isSelectable(): boolean {
    return this.variant === 'selectable';
  }

  get isInteractive(): boolean {
    return this.isExpandable || this.isSelectable;
  }

  get isDisabled(): boolean {
    return this.disabled || this.state === 'disabled';
  }

  get showsActions(): boolean {
    return this.isDefault || this.isImage;
  }

  get contentDir(): 'rtl' | 'auto' {
    return this.rtl ? 'rtl' : 'auto';
  }

  get toggleIconUrl(): string {
    if (this.expanded) {
      return this.isDisabled ? this.iconUpDisabledUrl : this.iconUpUrl;
    }

    return this.isDisabled ? this.iconDownDisabledUrl : this.iconDownUrl;
  }

  toggleExpanded(): void {
    if (!this.isExpandable || this.isDisabled) {
      return;
    }

    this.expanded = !this.expanded;
  }

  toggleSelected(): void {
    if (!this.isSelectable || this.isDisabled) {
      return;
    }

    this.selected = !this.selected;
  }
}

import { Component, Input } from '@angular/core';

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
  selector: 'dga-button',
  standalone: true,
  imports: [],
  templateUrl: './dga-button.component.html',
  styleUrl: './dga-button.component.scss'
})
export class DgaButtonComponent {
  @Input() label = 'Button';
  @Input() variant: ButtonStyle = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() state: ButtonState = 'default';
  @Input() iconOnly = false;
  @Input() leadIcon = true;
  @Input() trailIcon = false;
  @Input() leadIconUrl = 'assets/icons/white-button-icon.svg';
  @Input() trailIconUrl = 'assets/icons/white-button-icon.svg';
  @Input() rtl = false;
  @Input() onColor = false;
  @Input() destructive = false;
  @Input() disabled = false;
  @Input() fullWidth = false;

  get buttonClasses(): string[] {
    const stateClass = this.isDisabled ? 'dga-button--disabled' : `dga-button--${this.state}`;

    return [
      'dga-button',
      `dga-button--${this.variant}`,
      `dga-button--${this.size}`,
      stateClass,
      this.iconOnly ? 'dga-button--icon-only' : '',
      this.rtl ? 'dga-button--rtl' : '',
      this.onColor ? 'dga-button--on-color' : '',
      this.destructive ? 'dga-button--destructive' : '',
      this.fullWidth ? 'dga-button--full-width' : ''
    ].filter(Boolean);
  }

  get showLeadIcon(): boolean {
    return (this.iconOnly || this.leadIcon) && !!this.leadIconUrl;
  }

  get showTrailIcon(): boolean {
    return !this.iconOnly && this.trailIcon && !!this.trailIconUrl;
  }

  get isDisabled(): boolean {
    return this.disabled || this.state === 'disabled';
  }
}

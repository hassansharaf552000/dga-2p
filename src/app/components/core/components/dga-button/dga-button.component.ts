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
  @Input() rtl = false;
  @Input() onColor = false;
  @Input() destructive = false;
  @Input() disabled = false;
  @Input() fullWidth = false;

  protected readonly leadIconUrl =
    'https://www.figma.com/api/mcp/asset/98c61095-9f6e-4f84-b1ac-c64038630c66';
  protected readonly trailIconUrl =
    'https://www.figma.com/api/mcp/asset/5945472a-e913-446c-8de8-323db6335bd6';

  get buttonClasses(): string[] {
    return [
      'dga-button',
      `dga-button--${this.variant}`,
      `dga-button--${this.size}`,
      `dga-button--${this.state}`,
      this.iconOnly ? 'dga-button--icon-only' : '',
      this.rtl ? 'dga-button--rtl' : '',
      this.onColor ? 'dga-button--on-color' : '',
      this.destructive ? 'dga-button--destructive' : '',
      this.fullWidth ? 'dga-button--full-width' : ''
    ].filter(Boolean);
  }

  get showLeadIcon(): boolean {
    return this.iconOnly || this.leadIcon;
  }

  get showTrailIcon(): boolean {
    return !this.iconOnly && this.trailIcon;
  }

  get isDisabled(): boolean {
    return this.disabled || this.state === 'disabled';
  }
}

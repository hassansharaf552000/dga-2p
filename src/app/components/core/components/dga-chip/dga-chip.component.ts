import { Component, Input } from '@angular/core';

type ChipStyle = 'primary' | 'neutral';
type ChipSize = 'small' | 'medium' | 'large';
type ChipState = 'default' | 'hovered' | 'pressed' | 'selected' | 'focused' | 'disabled';

@Component({
  selector: 'dga-chip',
  standalone: true,
  imports: [],
  templateUrl: './dga-chip.component.html',
  styleUrl: './dga-chip.component.scss'
})
export class DgaChipComponent {
  @Input() label = 'Item';
  @Input() style: ChipStyle = 'primary';
  @Input() size: ChipSize = 'small';
  @Input() state: ChipState = 'default';
  @Input() rounded = false;
  @Input() rtl = false;
  @Input() onColor = false;
  @Input() leadIcon = false;
  @Input() trailIcon = false;
  @Input() disabled = false;

  protected readonly leadIconUrl =
    'https://www.figma.com/api/mcp/asset/d9833afc-95c4-4c10-ada7-09c6df8fafad';
  protected readonly trailIconUrl =
    'https://www.figma.com/api/mcp/asset/d9833afc-95c4-4c10-ada7-09c6df8fafad';

  get chipClasses(): string {
    return [
      'dga-chip',
      `dga-chip--${this.style}`,
      `dga-chip--${this.size}`,
      `dga-chip--${this.state}`,
      this.rounded ? 'dga-chip--rounded' : '',
      this.rtl ? 'dga-chip--rtl' : '',
      this.onColor ? 'dga-chip--on-color' : '',
      this.isDisabled ? 'dga-chip--disabled' : ''
    ].filter(Boolean).join(' ');
  }

  get showLeadIcon(): boolean {
    return this.leadIcon;
  }

  get showTrailIcon(): boolean {
    return this.trailIcon;
  }

  get isDisabled(): boolean {
    return this.disabled || this.state === 'disabled';
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ChipVariant = 'primary' | 'neutral';
export type ChipSize = 'small' | 'medium' | 'large';
export type ChipState = 'default' | 'hovered' | 'pressed' | 'selected' | 'focused' | 'disabled';

@Component({
  selector: 'dga-chip',
  standalone: true,
  imports: [],
  templateUrl: './dga-chip.component.html',
  styleUrl: './dga-chip.component.scss'
})
export class DgaChipComponent {
  @Input() label = 'Item';
  @Input() variant: ChipVariant = 'primary';
  @Input() size: ChipSize = 'small';
  @Input() state: ChipState = 'default';
  @Input() rounded = false;
  @Input() rtl = false;
  @Input() onColor = false;
  @Input() leadIcon = false;
  @Input() trailIcon = false;
  @Input() removable = false;
  @Input() selectable = false;
  @Input() disabled = false;
  @Input() ariaLabel = '';

  @Input()
  set selected(value: boolean) {
    this.isSelectedValue = value;
  }
  get selected(): boolean {
    return this.isSelected;
  }

  @Input('style')
  set legacyStyle(value: ChipVariant | null | undefined) {
    if (value) this.variant = value;
  }

  @Output() selectedChange = new EventEmitter<boolean>();
  @Output() chipClick = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  private isSelectedValue = false;

  get chipClasses(): string[] {
    const stateClass = this.isDisabled ? 'dga-chip--disabled' : `dga-chip--${this.resolvedState}`;

    return [
      'dga-chip',
      `dga-chip--${this.variant}`,
      `dga-chip--${this.size}`,
      stateClass,
      this.rounded ? 'dga-chip--rounded' : '',
      this.rtl ? 'dga-chip--rtl' : '',
      this.onColor ? 'dga-chip--on-color' : '',
      this.removable ? 'dga-chip--removable' : ''
    ].filter(Boolean);
  }

  get resolvedState(): ChipState {
    return this.isSelected ? 'selected' : this.state;
  }

  get isSelected(): boolean {
    return this.isSelectedValue || this.state === 'selected';
  }

  get isDisabled(): boolean {
    return this.disabled || this.state === 'disabled';
  }

  get showLeadIcon(): boolean {
    return this.leadIcon;
  }

  get showTrailIcon(): boolean {
    return this.trailIcon || this.removable;
  }

  get computedAriaLabel(): string | null {
    return this.ariaLabel || (this.removable ? `${this.label}, removable` : null);
  }

  onChipClick(): void {
    if (this.isDisabled) return;

    if (this.selectable) {
      this.isSelectedValue = !this.isSelected;
      this.selectedChange.emit(this.isSelectedValue);
    }

    this.chipClick.emit();
  }

  onRemoveClick(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.isDisabled) this.remove.emit();
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.removable || this.isDisabled) return;
    if (event.key !== 'Delete' && event.key !== 'Backspace') return;

    event.preventDefault();
    this.remove.emit();
  }
}

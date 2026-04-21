import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ContentSwitcherSize = 'small' | 'medium' | 'large';
export type ContentSwitcherState = 'normal' | 'hovered' | 'selected' | 'focused' | 'disabled';

export interface ContentSwitcherItem {
  id: string;
  label: string;
  state?: ContentSwitcherState;
  disabled?: boolean;
}

@Component({
  selector: 'dga-content-switcher',
  standalone: true,
  imports: [],
  templateUrl: './dga-content-switcher.component.html',
  styleUrl: './dga-content-switcher.component.scss'
})
export class DgaContentSwitcherComponent {
  @Input() items: readonly ContentSwitcherItem[] = [
    { id: 'item1', label: 'Item', state: 'selected' },
    { id: 'item2', label: 'Item' },
    { id: 'item3', label: 'Item' },
    { id: 'item4', label: 'Item' }
  ];
  @Input() size: ContentSwitcherSize = 'small';
  @Input() onColor = false;
  @Input() rtl = false;
  @Input() ariaLabel = 'Content switcher';

  @Input()
  set selectedId(value: string) {
    this.activeId = value;
  }
  get selectedId(): string {
    return this.resolvedSelectedId;
  }

  @Output() selectedIdChange = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<ContentSwitcherItem>();

  private activeId = '';

  get switcherClasses(): string[] {
    return [
      'dga-content-switcher',
      `dga-content-switcher--${this.size}`,
      this.onColor ? 'dga-content-switcher--on-color' : '',
      this.rtl ? 'dga-content-switcher--rtl' : ''
    ].filter(Boolean);
  }

  get resolvedSelectedId(): string {
    if (this.activeId && this.items.some((item) => item.id === this.activeId && !this.isItemDisabled(item))) {
      return this.activeId;
    }

    return this.items.find((item) => item.state === 'selected' && !this.isItemDisabled(item))?.id
      ?? this.items.find((item) => !this.isItemDisabled(item))?.id
      ?? '';
  }

  itemClasses(item: ContentSwitcherItem, index: number): string[] {
    return [
      'dga-content-switcher__item',
      index === 0 ? 'dga-content-switcher__item--first' : '',
      index === this.items.length - 1 ? 'dga-content-switcher__item--last' : '',
      this.isSelected(item) ? 'dga-content-switcher__item--selected' : '',
      item.state === 'focused' ? 'dga-content-switcher__item--focused' : '',
      item.state === 'hovered' ? 'dga-content-switcher__item--hovered' : ''
    ].filter(Boolean);
  }

  isSelected(item: ContentSwitcherItem): boolean {
    return item.id === this.resolvedSelectedId;
  }

  isItemDisabled(item: ContentSwitcherItem): boolean {
    return !!item.disabled || item.state === 'disabled';
  }

  selectItem(item: ContentSwitcherItem): void {
    if (this.isItemDisabled(item) || item.id === this.resolvedSelectedId) return;

    this.activeId = item.id;
    this.selectedIdChange.emit(item.id);
    this.selectionChange.emit(item);
  }

  onItemKeydown(event: KeyboardEvent, item: ContentSwitcherItem): void {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.selectItem(item);
      return;
    }

    const previousKey = this.rtl ? 'ArrowRight' : 'ArrowLeft';
    const nextKey = this.rtl ? 'ArrowLeft' : 'ArrowRight';

    if (event.key === previousKey) {
      event.preventDefault();
      this.selectByOffset(-1);
    } else if (event.key === nextKey) {
      event.preventDefault();
      this.selectByOffset(1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      this.selectFirstAvailable();
    } else if (event.key === 'End') {
      event.preventDefault();
      this.selectLastAvailable();
    }
  }

  private selectByOffset(offset: number): void {
    const enabledItems = this.items.filter((item) => !this.isItemDisabled(item));
    const currentIndex = enabledItems.findIndex((item) => item.id === this.resolvedSelectedId);
    const nextIndex = (currentIndex + offset + enabledItems.length) % enabledItems.length;
    const nextItem = enabledItems[nextIndex];
    if (nextItem) this.selectItem(nextItem);
  }

  private selectFirstAvailable(): void {
    const item = this.items.find((option) => !this.isItemDisabled(option));
    if (item) this.selectItem(item);
  }

  private selectLastAvailable(): void {
    const item = [...this.items].reverse().find((option) => !this.isItemDisabled(option));
    if (item) this.selectItem(item);
  }
}

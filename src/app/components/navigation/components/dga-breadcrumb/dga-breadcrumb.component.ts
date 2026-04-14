import { Component, HostListener, Input } from '@angular/core';

interface BreadcrumbItem {
  label: string;
  url?: string;
  overflow?: boolean;
}

@Component({
  selector: 'dga-breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './dga-breadcrumb.component.html',
  styleUrl: './dga-breadcrumb.component.scss'
})
export class DgaBreadcrumbComponent {
  @Input() items: readonly BreadcrumbItem[] = [
    { label: 'Link', url: '/' },
    { label: 'Link', url: '/products' },
    { label: 'Link' }
  ];
  @Input() separator = '/';
  @Input() showHome = true;
  @Input() maxItems = 5;
  @Input() rtl = false;
  @Input() useIconSeparator = true;

  protected readonly separatorIconLtrUrl =
    'assets/icons/breadcrumb-spritor.svg';
  protected readonly separatorIconRtlUrl =
    'assets/icons/breadcrumb-spritor.svg';
  protected overflowOpen = false;

  get separatorIconUrl(): string {
    return this.rtl ? this.separatorIconRtlUrl : this.separatorIconLtrUrl;
  }

  get visibleItems(): BreadcrumbItem[] {
    const baseItems = this.baseItems;
    const maxItems = this.maxItems || 0;

    if (!maxItems || baseItems.length <= maxItems) {
      return baseItems;
    }

    if (maxItems < 3) {
      return baseItems.slice(-maxItems);
    }

    const head = baseItems[0];
    const tail = baseItems.slice(-this.collapsedTailCount);
    return [head, { label: '...', overflow: true }, ...tail];
  }

  get renderedItems(): BreadcrumbItem[] {
    const items = this.visibleItems;
    return this.rtl ? [...items].reverse() : items;
  }

  get overflowItems(): BreadcrumbItem[] {
    const baseItems = this.baseItems;
    const maxItems = this.maxItems || 0;

    if (!maxItems || baseItems.length <= maxItems || maxItems < 3) {
      return [];
    }

    return baseItems.slice(1, -this.collapsedTailCount);
  }

  get renderedOverflowItems(): BreadcrumbItem[] {
    const items = this.overflowItems;
    return this.rtl ? [...items].reverse() : items;
  }

  private get baseItems(): BreadcrumbItem[] {
    let baseItems: BreadcrumbItem[] = [...this.items];
    if (!this.showHome && baseItems.length) {
      baseItems = baseItems.slice(1);
    }

    return baseItems;
  }

  private get collapsedTailCount(): number {
    return this.maxItems >= 5 ? 2 : 1;
  }

  toggleOverflow(event: MouseEvent): void {
    event.stopPropagation();
    this.overflowOpen = !this.overflowOpen;
  }

  closeOverflow(): void {
    this.overflowOpen = false;
  }

  @HostListener('document:click')
  handleDocumentClick(): void {
    this.closeOverflow();
  }
}

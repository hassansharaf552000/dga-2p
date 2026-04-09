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
  @Input() maxItems = 0;
  @Input() rtl = false;
  @Input() useIconSeparator = true;

  protected readonly separatorIconUrl =
    'https://www.figma.com/api/mcp/asset/5b4c83e7-c293-4592-8208-5bc1aa33aa53';
  protected overflowOpen = false;

  get visibleItems(): BreadcrumbItem[] {
    let baseItems: BreadcrumbItem[] = [...this.items];
    if (!this.showHome && baseItems.length) {
      baseItems = baseItems.slice(1);
    }

    const maxItems = this.maxItems || 0;
    if (!maxItems || baseItems.length <= maxItems) {
      return baseItems;
    }

    if (maxItems < 3) {
      return baseItems.slice(0, maxItems);
    }

    const head = baseItems[0];
    const tail = baseItems[baseItems.length - 1];
    return [head, { label: '...', overflow: true }, tail];
  }

  get overflowItems(): BreadcrumbItem[] {
    let baseItems: BreadcrumbItem[] = [...this.items];
    if (!this.showHome && baseItems.length) {
      baseItems = baseItems.slice(1);
    }

    const maxItems = this.maxItems || 0;
    if (!maxItems || baseItems.length <= maxItems || maxItems < 3) {
      return [];
    }

    return baseItems.slice(1, baseItems.length - 1);
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

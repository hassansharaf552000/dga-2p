import { Component, Input } from '@angular/core';

type PaginationSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'dga-pagination',
  standalone: true,
  imports: [],
  templateUrl: './dga-pagination.component.html',
  styleUrl: './dga-pagination.component.scss'
})
export class DgaPaginationComponent {
  @Input() totalItems = 100;
  @Input() itemsPerPage = 10;
  @Input() currentPage = 1;
  @Input() size: PaginationSize = 'md';
  @Input() showFirstLast = true;
  @Input() showPageSize = true;
  @Input() maxVisiblePages = 5;

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get visiblePages(): number[] {
    const pages: number[] = [];
    const half = Math.floor(this.maxVisiblePages / 2);
    let start = Math.max(1, this.currentPage - half);
    const end = Math.min(this.totalPages, start + this.maxVisiblePages - 1);
    start = Math.max(1, end - this.maxVisiblePages + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
}

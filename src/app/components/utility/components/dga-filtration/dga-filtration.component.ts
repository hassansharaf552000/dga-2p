import { Component, Input } from '@angular/core';

interface FilterOption {
  id: string;
  label: string;
  type: 'checkbox' | 'radio' | 'select' | 'range';
  options?: string[];
  value?: any;
}

interface FilterGroup {
  id: string;
  label: string;
  filters: readonly FilterOption[];
  expanded?: boolean;
}

@Component({
  selector: 'dga-filtration',
  standalone: true,
  imports: [],
  templateUrl: './dga-filtration.component.html',
  styleUrl: './dga-filtration.component.scss'
})
export class DgaFiltrationComponent {
  @Input() groups: readonly FilterGroup[] = [
    {
      id: 'category',
      label: 'Category',
      expanded: true,
      filters: [
        { id: 'cat1', label: 'Electronics', type: 'checkbox' },
        { id: 'cat2', label: 'Clothing', type: 'checkbox' },
        { id: 'cat3', label: 'Books', type: 'checkbox' }
      ]
    },
    {
      id: 'price',
      label: 'Price Range',
      expanded: true,
      filters: [
        { id: 'price', label: 'Price', type: 'range' }
      ]
    }
  ];
  @Input() showClearAll = true;
  @Input() showApply = true;
  @Input() compact = false;
}

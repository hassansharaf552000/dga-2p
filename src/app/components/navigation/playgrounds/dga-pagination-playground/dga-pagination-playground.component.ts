import { Component } from '@angular/core';
import { DgaPaginationComponent } from '../../components/dga-pagination/dga-pagination.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-pagination-playground',
  standalone: true,
  imports: [DgaPaginationComponent, DgaPlaygroundComponent],
  templateUrl: './dga-pagination-playground.component.html',
  styleUrl: './dga-pagination-playground.component.scss'
})
export class DgaPaginationPlaygroundComponent {
  componentProps = {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    size: 'md',
    showFirstLast: true,
    showPageSize: true,
    maxVisiblePages: 5
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Pagination',
    description: 'Page navigation component.',
    selector: 'dga-pagination',
    componentName: 'DgaPagination',
    textFields: [
      { key: 'totalItems', label: 'Total Items', type: 'text' },
      { key: 'itemsPerPage', label: 'Items Per Page', type: 'text' },
      { key: 'currentPage', label: 'Current Page', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['sm', 'md', 'lg'] }
    ],
    booleanFields: [
      { key: 'showFirstLast', label: 'Show First/Last', type: 'boolean' },
      { key: 'showPageSize', label: 'Show Page Info', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-pagination
  [totalItems]="${props.totalItems}"
  [itemsPerPage]="${props.itemsPerPage}"
  size="${props.size}">
</dga-pagination>`,
    generateCss: () => ''
  };
}

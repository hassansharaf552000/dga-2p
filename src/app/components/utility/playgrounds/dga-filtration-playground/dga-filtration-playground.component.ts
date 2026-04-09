import { Component } from '@angular/core';
import { DgaFiltrationComponent } from '../../components/dga-filtration/dga-filtration.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-filtration-playground',
  standalone: true,
  imports: [DgaFiltrationComponent, DgaPlaygroundComponent],
  templateUrl: './dga-filtration-playground.component.html',
  styleUrl: './dga-filtration-playground.component.scss'
})
export class DgaFiltrationPlaygroundComponent {
  componentProps = {
    showClearAll: true,
    showApply: true,
    compact: false,
    groups: [
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
        id: 'brand',
        label: 'Brand',
        expanded: true,
        filters: [
          { id: 'brand1', label: 'Brand A', type: 'checkbox' },
          { id: 'brand2', label: 'Brand B', type: 'checkbox' }
        ]
      }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Filtration',
    description: 'Filter panel component.',
    selector: 'dga-filtration',
    componentName: 'DgaFiltration',
    textFields: [],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'showClearAll', label: 'Show Clear All', type: 'boolean' },
      { key: 'showApply', label: 'Show Apply', type: 'boolean' },
      { key: 'compact', label: 'Compact', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-filtration
  [showClearAll]="${props.showClearAll}"
  [showApply]="${props.showApply}"
  [groups]="filterGroups">
</dga-filtration>`,
    generateCss: () => ''
  };
}

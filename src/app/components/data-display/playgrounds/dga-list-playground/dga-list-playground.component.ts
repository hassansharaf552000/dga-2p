import { Component } from '@angular/core';
import { DgaListComponent } from '../../components/dga-list/dga-list.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-list-playground',
  standalone: true,
  imports: [DgaListComponent, DgaPlaygroundComponent],
  templateUrl: './dga-list-playground.component.html',
  styleUrl: './dga-list-playground.component.scss'
})
export class DgaListPlaygroundComponent {
  componentProps = {
    items: ['First item', 'Second item', 'Third item'],
    style: 'disc',
    dividers: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'List',
    description: 'Simple list component with various styles.',
    selector: 'dga-list',
    componentName: 'DgaList',
    textFields: [],
    textareaFields: [],
    selectFields: [
      { key: 'style', label: 'Style', type: 'select', options: ['none', 'disc', 'decimal', 'check'] }
    ],
    booleanFields: [
      { key: 'dividers', label: 'Dividers', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-list
  [items]="items"
  style="${props.style}"
  [dividers]="${props.dividers}">
</dga-list>`,
    generateCss: () => ''
  };
}

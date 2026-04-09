import { Component } from '@angular/core';
import { DgaStructuredListComponent } from '../../components/dga-structured-list/dga-structured-list.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-structured-list-playground',
  standalone: true,
  imports: [DgaStructuredListComponent, DgaPlaygroundComponent],
  templateUrl: './dga-structured-list-playground.component.html',
  styleUrl: './dga-structured-list-playground.component.scss'
})
export class DgaStructuredListPlaygroundComponent {
  componentProps = {
    rows: [
      { label: 'Name', value: 'John Doe' },
      { label: 'Email', value: 'john@example.com' },
      { label: 'Role', value: 'Administrator' }
    ],
    bordered: true,
    striped: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Structured List',
    description: 'Key-value pair display list.',
    selector: 'dga-structured-list',
    componentName: 'DgaStructuredList',
    textFields: [],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'bordered', label: 'Bordered', type: 'boolean' },
      { key: 'striped', label: 'Striped', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-structured-list
  [rows]="rows"
  [bordered]="${props.bordered}"
  [striped]="${props.striped}">
</dga-structured-list>`,
    generateCss: () => ''
  };
}

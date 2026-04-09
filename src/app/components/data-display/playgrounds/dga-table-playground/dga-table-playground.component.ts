import { Component } from '@angular/core';
import { DgaTableComponent } from '../../components/dga-table/dga-table.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-table-playground',
  standalone: true,
  imports: [DgaTableComponent, DgaPlaygroundComponent],
  templateUrl: './dga-table-playground.component.html',
  styleUrl: './dga-table-playground.component.scss'
})
export class DgaTablePlaygroundComponent {
  componentProps = {
    columns: ['Name', 'Email', 'Role'],
    data: [
      ['John Doe', 'john@example.com', 'Admin'],
      ['Jane Smith', 'jane@example.com', 'User'],
      ['Bob Johnson', 'bob@example.com', 'Editor']
    ],
    striped: false,
    bordered: true,
    hoverable: true,
    compact: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Table',
    description: 'Data table with customizable styles.',
    selector: 'dga-table',
    componentName: 'DgaTable',
    textFields: [],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'striped', label: 'Striped', type: 'boolean' },
      { key: 'bordered', label: 'Bordered', type: 'boolean' },
      { key: 'hoverable', label: 'Hoverable', type: 'boolean' },
      { key: 'compact', label: 'Compact', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-table
  [columns]="columns"
  [data]="data"
  [striped]="${props.striped}"
  [bordered]="${props.bordered}">
</dga-table>`,
    generateCss: () => ''
  };
}

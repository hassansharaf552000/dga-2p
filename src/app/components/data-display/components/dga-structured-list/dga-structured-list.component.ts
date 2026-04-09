import { Component, Input } from '@angular/core';

export interface StructuredListRow {
  label: string;
  value: string;
}

@Component({
  selector: 'dga-structured-list',
  standalone: true,
  imports: [],
  templateUrl: './dga-structured-list.component.html',
  styleUrl: './dga-structured-list.component.scss'
})
export class DgaStructuredListComponent {
  @Input() rows: readonly StructuredListRow[] = [
    { label: 'Name', value: 'John Doe' },
    { label: 'Email', value: 'john@example.com' },
    { label: 'Role', value: 'Administrator' }
  ];
  @Input() bordered = true;
  @Input() striped = false;
}

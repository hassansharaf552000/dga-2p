import { Component, Input } from '@angular/core';

@Component({
  selector: 'dga-table',
  standalone: true,
  imports: [],
  templateUrl: './dga-table.component.html',
  styleUrl: './dga-table.component.scss'
})
export class DgaTableComponent {
  @Input() columns: readonly string[] = ['Column 1', 'Column 2', 'Column 3'];
  @Input() data: readonly (readonly any[])[] = [
    ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3'],
    ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3']
  ];
  @Input() striped = false;
  @Input() bordered = true;
  @Input() hoverable = true;
  @Input() compact = false;
}

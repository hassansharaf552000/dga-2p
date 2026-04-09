import { Component, Input } from '@angular/core';

type ListStyle = 'none' | 'disc' | 'decimal' | 'check';

@Component({
  selector: 'dga-list',
  standalone: true,
  imports: [],
  templateUrl: './dga-list.component.html',
  styleUrl: './dga-list.component.scss'
})
export class DgaListComponent {
  @Input() items: readonly string[] = ['Item 1', 'Item 2', 'Item 3'];
  @Input() style: ListStyle = 'disc';
  @Input() dividers = false;
}

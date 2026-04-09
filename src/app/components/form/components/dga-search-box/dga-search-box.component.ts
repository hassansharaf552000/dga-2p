import { Component, Input } from '@angular/core';

@Component({
  selector: 'dga-search-box',
  standalone: true,
  imports: [],
  templateUrl: './dga-search-box.component.html',
  styleUrl: './dga-search-box.component.scss'
})
export class DgaSearchBoxComponent {
  @Input() placeholder = 'Search...';
  @Input() value = '';
  @Input() showClear = true;
  @Input() disabled = false;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'dga-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dga-dropdown.component.html',
  styleUrl: './dga-dropdown.component.scss'
})
export class DgaDropdownComponent {
  @Input() label = '';
  @Input() placeholder = 'Select an option';
  @Input() options: readonly string[] = ['Option 1', 'Option 2', 'Option 3'];
  @Input() value = '';
  @Input() disabled = false;
  @Input() error = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'dga-date-picker',
  standalone: true,
  imports: [],
  templateUrl: './dga-date-picker.component.html',
  styleUrl: './dga-date-picker.component.scss'
})
export class DgaDatePickerComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() placeholder = 'Select date';
  @Input() disabled = false;
  @Input() error = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'dga-textarea',
  standalone: true,
  imports: [],
  templateUrl: './dga-textarea.component.html',
  styleUrl: './dga-textarea.component.scss'
})
export class DgaTextareaComponent {
  @Input() label = '';
  @Input() placeholder = 'Enter text...';
  @Input() value = '';
  @Input() rows = 4;
  @Input() disabled = false;
  @Input() error = '';
  @Input() helperText = '';
  @Input() maxLength = 0;
}

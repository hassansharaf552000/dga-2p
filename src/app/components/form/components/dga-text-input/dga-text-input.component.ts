import { Component, Input } from '@angular/core';

type InputSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'dga-text-input',
  standalone: true,
  imports: [],
  templateUrl: './dga-text-input.component.html',
  styleUrl: './dga-text-input.component.scss'
})
export class DgaTextInputComponent {
  @Input() label = '';
  @Input() placeholder = 'Enter text...';
  @Input() value = '';
  @Input() size: InputSize = 'medium';
  @Input() disabled = false;
  @Input() error = '';
  @Input() helperText = '';
}

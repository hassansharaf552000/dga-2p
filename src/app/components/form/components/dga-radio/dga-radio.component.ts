import { Component, Input } from '@angular/core';

@Component({
  selector: 'dga-radio',
  standalone: true,
  imports: [],
  templateUrl: './dga-radio.component.html',
  styleUrl: './dga-radio.component.scss'
})
export class DgaRadioComponent {
  @Input() label = 'Radio';
  @Input() name = 'radio-group';
  @Input() value = '';
  @Input() checked = false;
  @Input() disabled = false;
}

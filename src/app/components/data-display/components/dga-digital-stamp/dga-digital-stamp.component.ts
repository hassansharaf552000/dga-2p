import { Component, Input } from '@angular/core';

type StampVariant = 'approved' | 'rejected' | 'pending' | 'custom';

@Component({
  selector: 'dga-digital-stamp',
  standalone: true,
  imports: [],
  templateUrl: './dga-digital-stamp.component.html',
  styleUrl: './dga-digital-stamp.component.scss'
})
export class DgaDigitalStampComponent {
  @Input() variant: StampVariant = 'approved';
  @Input() text = '';
  @Input() date = '';
  @Input() signature = '';
  @Input() rotation = -15;
}

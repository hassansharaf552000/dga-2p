import { Component, Input } from '@angular/core';

type LinkVariant = 'default' | 'subtle' | 'prominent';

@Component({
  selector: 'dga-link',
  standalone: true,
  imports: [],
  templateUrl: './dga-link.component.html',
  styleUrl: './dga-link.component.scss'
})
export class DgaLinkComponent {
  @Input() href = '#';
  @Input() label = 'Link';
  @Input() variant: LinkVariant = 'default';
  @Input() external = false;
  @Input() disabled = false;
}

import { Component, Input } from '@angular/core';

type BadgeVariant = 'dot' | 'count';
type BadgeColor = 'default' | 'primary' | 'success' | 'warning' | 'error';

@Component({
  selector: 'dga-badge',
  standalone: true,
  imports: [],
  templateUrl: './dga-badge.component.html',
  styleUrl: './dga-badge.component.scss'
})
export class DgaBadgeComponent {
  @Input() count = 0;
  @Input() maxCount = 99;
  @Input() variant: BadgeVariant = 'count';
  @Input() color: BadgeColor = 'error';
  @Input() showZero = false;

  get displayCount(): string {
    if (this.count > this.maxCount) {
      return `${this.maxCount}+`;
    }
    return String(this.count);
  }
}

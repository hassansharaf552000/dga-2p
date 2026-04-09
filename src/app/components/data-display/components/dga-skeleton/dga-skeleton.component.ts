import { Component, Input } from '@angular/core';

type SkeletonVariant = 'text' | 'circle' | 'rectangle' | 'card';

@Component({
  selector: 'dga-skeleton',
  standalone: true,
  imports: [],
  templateUrl: './dga-skeleton.component.html',
  styleUrl: './dga-skeleton.component.scss'
})
export class DgaSkeletonComponent {
  @Input() variant: SkeletonVariant = 'text';
  @Input() width = '100%';
  @Input() height = '20px';
  @Input() lines = 1;
  @Input() animated = true;
}

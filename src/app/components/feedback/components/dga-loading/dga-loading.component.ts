import { Component, Input } from '@angular/core';

type LoadingSize = 'sm' | 'md' | 'lg' | 'xl';
type LoadingVariant = 'spinner' | 'dots' | 'bar' | 'pulse';

@Component({
  selector: 'dga-loading',
  standalone: true,
  imports: [],
  templateUrl: './dga-loading.component.html',
  styleUrl: './dga-loading.component.scss'
})
export class DgaLoadingComponent {
  @Input() variant: LoadingVariant = 'spinner';
  @Input() size: LoadingSize = 'md';
  @Input() label = '';
  @Input() overlay = false;
  @Input() color = '#0066cc';
}

import { Component, Input } from '@angular/core';

type MetricTrend = 'up' | 'down' | 'neutral';

@Component({
  selector: 'dga-metric',
  standalone: true,
  imports: [],
  templateUrl: './dga-metric.component.html',
  styleUrl: './dga-metric.component.scss'
})
export class DgaMetricComponent {
  @Input() label = 'Metric';
  @Input() value = '1,234';
  @Input() unit = '';
  @Input() trend: MetricTrend = 'neutral';
  @Input() trendValue = '';
  @Input() description = '';
}

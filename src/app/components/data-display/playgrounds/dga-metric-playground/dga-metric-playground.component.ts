import { Component } from '@angular/core';
import { DgaMetricComponent } from '../../components/dga-metric/dga-metric.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-metric-playground',
  standalone: true,
  imports: [DgaMetricComponent, DgaPlaygroundComponent],
  templateUrl: './dga-metric-playground.component.html',
  styleUrl: './dga-metric-playground.component.scss'
})
export class DgaMetricPlaygroundComponent {
  componentProps = {
    label: 'Total Revenue',
    value: '$12,345',
    unit: '',
    trend: 'up',
    trendValue: '+12%',
    description: 'Compared to last month'
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Metric',
    description: 'KPI and statistics display.',
    selector: 'dga-metric',
    componentName: 'DgaMetric',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'value', label: 'Value', type: 'text' },
      { key: 'trendValue', label: 'Trend Value', type: 'text' },
      { key: 'description', label: 'Description', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'trend', label: 'Trend', type: 'select', options: ['up', 'down', 'neutral'] }
    ],
    booleanFields: [],
    generateHtml: (props) => `<dga-metric
  label="${props.label}"
  value="${props.value}"
  trend="${props.trend}"
  trendValue="${props.trendValue}">
</dga-metric>`,
    generateCss: () => ''
  };
}

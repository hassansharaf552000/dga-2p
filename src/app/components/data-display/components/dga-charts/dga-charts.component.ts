import { Component, Input } from '@angular/core';

type ChartType = 'bar' | 'line' | 'pie' | 'donut';
type ChartColorStyle = 'brand' | 'color';

type CartesianSeries = {
  color: string;
  label: string;
  labelRtl: string;
  values: number[];
};

type PieSegment = {
  color: string;
  label: string;
  labelRtl: string;
  value: number;
};

type BarColumn = {
  label: string;
  segments: {
    color: string;
    heightPercent: number;
    value: number;
  }[];
};

@Component({
  selector: 'dga-charts',
  standalone: true,
  imports: [],
  templateUrl: './dga-charts.component.html',
  styleUrl: './dga-charts.component.scss'
})
export class DgaChartsComponent {
  @Input() type: ChartType = 'bar';
  @Input() title = 'Charts';
  @Input() height: number | string = 180;
  @Input() rtl = false;
  @Input() showLegend = true;
  @Input() showXAxisLabel = true;
  @Input() showYAxisLabel = true;
  @Input() showSeries2 = true;
  @Input() showSeries3 = true;
  @Input() showData = true;
  @Input() colorStyle: ChartColorStyle = 'brand';
  @Input() seriesCount: number | string = 3;

  protected readonly maxValue = 800;
  protected readonly axisValues = ['800', '700', '600', '500', '400', '300', '200', '100', '0'];

  private readonly barLabelsLtr = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun'];
  private readonly barLabelsRtl = ['محرم', 'صفر', 'ربيع أول', 'ربيع ثاني', 'جماد الأول', 'جماد الثاني'];
  private readonly lineLabelsLtr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  private readonly lineLabelsRtl = ['محرم', 'صفر', 'ربيع I', 'ربيع II', 'جماد I', 'جماد II', 'رجب', 'شعبان', 'رمضان'];

  private readonly barSeriesDefinitions: CartesianSeries[] = [
    {
      label: 'Series 1',
      labelRtl: 'قيمة 1',
      color: 'var(--dga-700)',
      values: [160, 340, 50, 110, 290, 250]
    },
    {
      label: 'Series 2',
      labelRtl: 'قيمة 2',
      color: 'var(--dga-400)',
      values: [140, 260, 55, 130, 230, 180]
    },
    {
      label: 'Series 3',
      labelRtl: 'قيمة 3',
      color: 'var(--dga-neutral-200)',
      values: [110, 200, 35, 80, 170, 150]
    }
  ];

  private readonly lineSeriesDefinitions: CartesianSeries[] = [
    {
      label: 'Series 1',
      labelRtl: 'قيمة 1',
      color: 'var(--dga-700)',
      values: [560, 580, 590, 610, 650, 620, 680, 660, 720]
    },
    {
      label: 'Series 2',
      labelRtl: 'قيمة 2',
      color: 'var(--dga-500)',
      values: [380, 390, 395, 405, 450, 420, 470, 455, 500]
    },
    {
      label: 'Series 3',
      labelRtl: 'قيمة 3',
      color: 'var(--dga-200)',
      values: [120, 150, 170, 200, 290, 220, 360, 320, 450]
    }
  ];

  private readonly pieDistributions: Record<number, number[]> = {
    1: [100],
    2: [50, 50],
    3: [52, 30, 18],
    4: [45, 25, 15, 15],
    5: [37, 22, 16, 14, 11],
    6: [25, 18, 12, 16, 14, 15]
  };

  private readonly brandPalette = [
    'var(--dga-600)',
    'var(--dga-400)',
    'var(--dga-200)',
    'var(--dga-700)',
    'var(--dga-900)',
    'var(--dga-800)'
  ];

  private readonly colorPalette = [
    'var(--dga-gold-400)',
    'var(--dga-300)',
    'var(--dga-warning-400)',
    'var(--dga-info-400)',
    'var(--dga-lavender-400)',
    'var(--dga-error-400)'
  ];

  protected readonly circularSize = 240;
  protected readonly lineWidth = 438;

  get chartClasses(): string[] {
    return [
      'dga-charts',
      `dga-charts--${this.type}`,
      this.rtl ? 'dga-charts--rtl' : ''
    ].filter(Boolean);
  }

  get isCircular(): boolean {
    return this.type === 'pie' || this.type === 'donut';
  }

  get canvasHeight(): number {
    return this.parseNumber(this.height, 180);
  }

  get lineHeight(): number {
    return Math.max(140, this.canvasHeight);
  }

  get legendVisible(): boolean {
    return this.isCircular ? this.showLegend && this.showData : this.showLegend;
  }

  get xAxisLabel(): string {
    return this.rtl ? 'الشهر' : 'Month';
  }

  get yAxisLabel(): string {
    return this.rtl ? 'المستخدمين النشطين' : 'Active users';
  }

  get xAxisLabels(): string[] {
    if (this.type === 'line') {
      return this.rtl ? [...this.lineLabelsRtl].reverse() : this.lineLabelsLtr;
    }

    return this.rtl ? [...this.barLabelsRtl].reverse() : this.barLabelsLtr;
  }

  get barLegendSeries(): CartesianSeries[] {
    return this.localizeLegend(this.visibleBarSeries);
  }

  get lineLegendSeries(): CartesianSeries[] {
    return this.localizeLegend(this.visibleLineSeries);
  }

  get barColumns(): BarColumn[] {
    const labels = this.xAxisLabels;
    const columns = this.visibleBarSeries.map((series) =>
      this.rtl ? [...series.values].reverse() : series.values
    );

    return labels.map((label, index) => ({
      label,
      segments: columns
        .map((values, seriesIndex) => ({
          color: this.visibleBarSeries[seriesIndex].color,
          heightPercent: (values[index] / this.maxValue) * 100,
          value: values[index]
        }))
        .filter((segment) => segment.value > 0)
        .reverse()
    }));
  }

  get pieSegments(): PieSegment[] {
    const count = this.clampedSeriesCount;
    const palette = (this.colorStyle === 'color' ? this.colorPalette : this.brandPalette).slice(0, count);
    const distribution = this.pieDistributions[count];

    return palette.map((color, index) => ({
      color,
      label: `Series ${index + 1}`,
      labelRtl: `قيمة ${index + 1}`,
      value: distribution[index]
    }));
  }

  get pieLegendSegments(): PieSegment[] {
    const segments = [...this.pieSegments];
    return this.rtl ? segments.reverse() : segments;
  }

  get pieGradient(): string {
    let start = 0;
    const stops = this.pieSegments.map((segment) => {
      const end = start + segment.value;
      const stop = `${segment.color} ${start}% ${end}%`;
      start = end;
      return stop;
    });

    return `conic-gradient(${stops.join(', ')})`;
  }

  get circularAriaLabel(): string {
    const labels = this.pieLegendSegments.map((segment) =>
      `${this.rtl ? segment.labelRtl : segment.label} ${segment.value}%`
    );

    return `${this.title}: ${labels.join(', ')}`;
  }

  get linePaths(): { color: string; path: string }[] {
    return this.visibleLineSeries.map((series) => ({
      color: series.color,
      path: this.buildSmoothPath(this.rtl ? [...series.values].reverse() : series.values)
    }));
  }

  protected legendLabel(label: string, labelRtl: string): string {
    return this.rtl ? labelRtl : label;
  }

  private get visibleBarSeries(): CartesianSeries[] {
    return this.barSeriesDefinitions.filter((series, index) => {
      if (index === 1) {
        return this.showSeries2;
      }

      if (index === 2) {
        return this.showSeries3;
      }

      return true;
    });
  }

  private get visibleLineSeries(): CartesianSeries[] {
    return this.lineSeriesDefinitions.filter((series, index) => {
      if (index === 1) {
        return this.showSeries2;
      }

      if (index === 2) {
        return this.showSeries3;
      }

      return true;
    });
  }

  private get clampedSeriesCount(): 1 | 2 | 3 | 4 | 5 | 6 {
    const count = Math.round(this.parseNumber(this.seriesCount, 3));
    return Math.min(6, Math.max(1, count)) as 1 | 2 | 3 | 4 | 5 | 6;
  }

  private localizeLegend<T extends { label: string; labelRtl: string }>(series: T[]): T[] {
    const items = [...series];
    return this.rtl ? items.reverse() : items;
  }

  private parseNumber(value: number | string, fallback: number): number {
    const parsed = typeof value === 'number' ? value : Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  private buildSmoothPath(values: number[]): string {
    const points = values.map((value, index) => ({
      x: (index / (values.length - 1)) * this.lineWidth,
      y: this.lineHeight - (value / this.maxValue) * this.lineHeight
    }));

    return points.reduce((path, point, index, array) => {
      if (index === 0) {
        return `M ${point.x},${point.y}`;
      }

      const previous = array[index - 1];
      const controlX = previous.x + (point.x - previous.x) / 2;
      return `${path} C ${controlX},${previous.y} ${controlX},${point.y} ${point.x},${point.y}`;
    }, '');
  }
}

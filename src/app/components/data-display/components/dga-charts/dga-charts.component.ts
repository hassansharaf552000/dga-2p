import { Component, Input } from '@angular/core';

type ChartType = 'bar' | 'line' | 'pie' | 'donut';

type BarSeriesImages = {
  label: string;
  series1: string;
  series2?: string;
  series3?: string;
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
  @Input() title = 'Chart Title';
  @Input() height = 280;
  @Input() rtl = false;
  @Input() showLegend = true;
  @Input() showXAxisLabel = true;
  @Input() showYAxisLabel = true;
  @Input() showSeries2 = true;
  @Input() showSeries3 = true;
  @Input() showData = true;

  readonly barLegend = [
    { label: 'Value 3', mark: 'https://www.figma.com/api/mcp/asset/66aaf6fd-b0a6-4797-a4b7-2780c9517674' },
    { label: 'Value 2', mark: 'https://www.figma.com/api/mcp/asset/e34979f8-3b7f-4a08-b736-acf30988842a' },
    { label: 'Value 1', mark: 'https://www.figma.com/api/mcp/asset/a8ad0053-07d9-49d3-a1a3-d2549499ee08' }
  ];

  readonly barDivider = 'https://www.figma.com/api/mcp/asset/bfdc31a1-e4a2-40a7-8414-ed72c8d76b12';

  readonly barSeries: BarSeriesImages[] = [
    {
      label: 'Month 6',
      series3: 'https://www.figma.com/api/mcp/asset/994dd4ba-ce79-45a8-9537-480e4270571a',
      series2: 'https://www.figma.com/api/mcp/asset/154c6989-b59f-4f0b-bb03-03737c2bad3f',
      series1: 'https://www.figma.com/api/mcp/asset/bb94c12b-e6b7-4c2f-9587-c49f7005dcca'
    },
    {
      label: 'Month 5',
      series3: 'https://www.figma.com/api/mcp/asset/5dbb092e-a8e0-4a14-850b-46fca5c58b17',
      series2: 'https://www.figma.com/api/mcp/asset/1900c395-99d0-4bc9-95d8-bec031da2ac5',
      series1: 'https://www.figma.com/api/mcp/asset/0cf55251-de43-425c-b7dd-4a5e55d72769'
    },
    {
      label: 'Month 4',
      series3: 'https://www.figma.com/api/mcp/asset/ee77d269-f3a1-4f6b-93a2-0ad575513b86',
      series2: 'https://www.figma.com/api/mcp/asset/bcc6685f-4c03-4dab-b7cd-c1ef4145a71b',
      series1: 'https://www.figma.com/api/mcp/asset/35998c1c-4cec-4057-8500-82c5bdf8eeda'
    },
    {
      label: 'Month 3',
      series3: 'https://www.figma.com/api/mcp/asset/a09fd2e1-21e6-44f2-993a-9f028119e2b8',
      series2: 'https://www.figma.com/api/mcp/asset/884103d1-61e9-4b0c-99a2-2699d1d26d93',
      series1: 'https://www.figma.com/api/mcp/asset/90dd3882-5e66-42d2-9654-3d79740167bc'
    },
    {
      label: 'Month 2',
      series3: 'https://www.figma.com/api/mcp/asset/2b629914-6dc8-40e6-ab1c-46cda67105c2',
      series2: 'https://www.figma.com/api/mcp/asset/46186461-304a-4deb-9bea-e9c4917c0d54',
      series1: 'https://www.figma.com/api/mcp/asset/82b807b8-1686-424e-a6ca-efd5ae3e8a19'
    },
    {
      label: 'Month 1',
      series3: 'https://www.figma.com/api/mcp/asset/89e4b04b-2396-4467-9063-cdd3ba1ea2d4',
      series2: 'https://www.figma.com/api/mcp/asset/fc76ef5e-91d0-4cf2-9c6c-bf1d02c25cf1',
      series1: 'https://www.figma.com/api/mcp/asset/e74bfc6d-9d45-4145-9985-0b0a682f6edc'
    }
  ];

  readonly lineLegend = [
    { label: 'Series 1', mark: 'https://www.figma.com/api/mcp/asset/9a2b3dbe-cf5f-4e68-99d0-0ca5da65ac5e' },
    { label: 'Series 2', mark: 'https://www.figma.com/api/mcp/asset/9a2b3dbe-cf5f-4e68-99d0-0ca5da65ac5e' },
    { label: 'Series 3', mark: 'https://www.figma.com/api/mcp/asset/9a2b3dbe-cf5f-4e68-99d0-0ca5da65ac5e' }
  ];

  readonly lineDivider = 'https://www.figma.com/api/mcp/asset/0dbb6970-b079-4039-a800-4ee85c4ce073';
  readonly lineSeries = [
    'https://www.figma.com/api/mcp/asset/11d56443-c837-427a-9a1d-ab835109990d',
    'https://www.figma.com/api/mcp/asset/fef50b50-b27e-4d17-8b4e-23b1b81fa72b',
    'https://www.figma.com/api/mcp/asset/57ca9438-ac32-4aa9-9aef-8e0b8e0b421e'
  ];

  readonly pieImage = 'https://www.figma.com/api/mcp/asset/864e8687-1ebe-4d56-b49a-56531b2bd1eb';
  readonly donutImage = 'https://www.figma.com/api/mcp/asset/4dd67910-e33c-48d4-9a96-9f39e2ddbb1d';
  readonly pieLegendMark = 'https://www.figma.com/api/mcp/asset/7728bebf-3451-4fcf-8005-41a62ea86bfb';

  readonly yAxisValues = ['800', '700', '600', '500', '400', '300', '200', '100', '0'];
  readonly lineMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  get chartClass(): string {
    return `dga-charts dga-charts--${this.type}`;
  }
}

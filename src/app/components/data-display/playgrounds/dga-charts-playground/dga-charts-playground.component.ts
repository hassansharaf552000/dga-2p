import { Component } from '@angular/core';
import { DgaChartsComponent } from '../../components/dga-charts/dga-charts.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type ChartType = 'bar' | 'line' | 'pie' | 'donut';
type ChartColorStyle = 'brand' | 'color';

@Component({
  selector: 'dga-charts-playground',
  standalone: true,
  imports: [DgaChartsComponent, DgaPlaygroundComponent],
  templateUrl: './dga-charts-playground.component.html',
  styleUrl: './dga-charts-playground.component.scss'
})
export class DgaChartsPlaygroundComponent {
  componentProps = {
    type: 'bar' as ChartType,
    title: 'Charts',
    height: 180,
    rtl: false,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    showSeries2: true,
    showSeries3: true,
    showData: true,
    colorStyle: 'brand' as ChartColorStyle,
    seriesCount: '3'
  };

  playgroundConfig: PlaygroundConfig = {
    title: 'Charts',
    description: 'Preview the bar, line, pie, and donut charts from the DGA chart library.',
    selector: 'dga-charts',
    componentName: 'DgaCharts',
    textFields: [
      {
        key: 'height',
        label: 'Plot height (px)',
        type: 'text',
        visibleWhen: (props) => props.type === 'bar' || props.type === 'line'
      }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'type', label: 'Type', type: 'select', options: ['bar', 'line', 'pie', 'donut'] },
      {
        key: 'colorStyle',
        label: 'Palette',
        type: 'select',
        options: ['brand', 'color'],
        visibleWhen: (props) => props.type === 'pie' || props.type === 'donut'
      },
      {
        key: 'seriesCount',
        label: 'Series count',
        type: 'select',
        options: ['1', '2', '3', '4', '5', '6'],
        visibleWhen: (props) => props.type === 'pie' || props.type === 'donut'
      }
    ],
    booleanFields: [
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      { key: 'showLegend', label: 'Legend', type: 'boolean' },
      {
        key: 'showXAxisLabel',
        label: 'X Axis Label',
        type: 'boolean',
        visibleWhen: (props) => props.type === 'bar' || props.type === 'line'
      },
      {
        key: 'showYAxisLabel',
        label: 'Y Axis Label',
        type: 'boolean',
        visibleWhen: (props) => props.type === 'bar' || props.type === 'line'
      },
      {
        key: 'showSeries2',
        label: 'Series 2',
        type: 'boolean',
        visibleWhen: (props) => props.type === 'bar' || props.type === 'line'
      },
      {
        key: 'showSeries3',
        label: 'Series 3',
        type: 'boolean',
        visibleWhen: (props) => props.type === 'bar' || props.type === 'line'
      },
      {
        key: 'showData',
        label: 'Pie Legend',
        type: 'boolean',
        visibleWhen: (props) => props.type === 'pie' || props.type === 'donut'
      }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: any): string {
    const lines = ['<dga-charts', `  type="${props.type}"`];

    if (props.type === 'bar' || props.type === 'line') {
      lines.push(`  [height]="${props.height}"`);
      lines.push(`  [showXAxisLabel]="${props.showXAxisLabel}"`);
      lines.push(`  [showYAxisLabel]="${props.showYAxisLabel}"`);
      lines.push(`  [showSeries2]="${props.showSeries2}"`);
      lines.push(`  [showSeries3]="${props.showSeries3}"`);
    }

    if (props.type === 'pie' || props.type === 'donut') {
      lines.push(`  colorStyle="${props.colorStyle}"`);
      lines.push(`  [seriesCount]="${props.seriesCount}"`);
      lines.push(`  [showData]="${props.showData}"`);
    }

    lines.push(`  [rtl]="${props.rtl}"`);
    lines.push(`  [showLegend]="${props.showLegend}"`);
    lines.push('></dga-charts>');

    return lines.join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-charts {\n  display: flex;\n  flex-direction: column;\n  gap: var(--dga-space-3);\n  inline-size: min(100%, 606px);\n  color: var(--dga-text-default);\n  font-family: var(--dga-font-text), sans-serif;\n}\n\n.dga-charts__legend {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--dga-space-4);\n  justify-content: flex-end;\n  font-size: var(--dga-text-sm-size);\n  line-height: var(--dga-text-sm-line);\n  color: var(--dga-neutral-700);\n}\n\n.dga-charts__cartesian {\n  display: flex;\n  align-items: stretch;\n  gap: var(--dga-space-4);\n}\n\n.dga-charts__plot-area {\n  display: grid;\n  grid-template-columns: 48px minmax(0, 1fr);\n  gap: var(--dga-space-3);\n}\n\n.dga-charts__canvas {\n  position: relative;\n}\n\n.dga-charts__grid-lines {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.dga-charts__grid-line {\n  inline-size: 100%;\n  border-top: 1px solid var(--dga-neutral-100);\n}\n\n.dga-charts__bars {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: repeat(6, minmax(32px, 1fr));\n  gap: var(--dga-space-5);\n  align-items: end;\n  block-size: 100%;\n}\n\n.dga-charts__bar-stack {\n  inline-size: 32px;\n  block-size: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  overflow: hidden;\n  border-radius: 8px 8px 0 0;\n}\n\n.dga-charts__line-chart {\n  position: relative;\n  z-index: 1;\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n.dga-charts__pie-chart {\n  position: relative;\n  border-radius: var(--dga-radius-full);\n}\n`;
  }
}

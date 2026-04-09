import { Component } from '@angular/core';
import { DgaChartsComponent } from '../../components/dga-charts/dga-charts.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-charts-playground',
  standalone: true,
  imports: [DgaChartsComponent, DgaPlaygroundComponent],
  templateUrl: './dga-charts-playground.component.html',
  styleUrl: './dga-charts-playground.component.scss'
})
export class DgaChartsPlaygroundComponent {
  componentProps = {
    type: 'bar',
    title: 'Charts',
    height: 360,
    rtl: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    showSeries2: true,
    showSeries3: true,
    showData: true
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Charts',
    description: 'Bar, line, and pie charts aligned with DGA chart foundations.',
    selector: 'dga-charts',
    componentName: 'DgaCharts',
    textFields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'height', label: 'Height (px)', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'type', label: 'Type', type: 'select', options: ['bar', 'line', 'pie', 'donut'] }
    ],
    booleanFields: [
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      { key: 'showLegend', label: 'Legend', type: 'boolean' },
      { key: 'showXAxisLabel', label: 'X Axis Label', type: 'boolean' },
      { key: 'showYAxisLabel', label: 'Y Axis Label', type: 'boolean' },
      { key: 'showSeries2', label: 'Series 2 (Bar)', type: 'boolean' },
      { key: 'showSeries3', label: 'Series 3 (Bar)', type: 'boolean' },
      { key: 'showData', label: 'Legend Data (Pie)', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-charts\n  type="${props.type}"\n  title="${props.title}"\n  [height]="${props.height}"\n  [rtl]="${props.rtl}"\n  [showLegend]="${props.showLegend}"\n  [showXAxisLabel]="${props.showXAxisLabel}"\n  [showYAxisLabel]="${props.showYAxisLabel}"\n  [showSeries2]="${props.showSeries2}"\n  [showSeries3]="${props.showSeries3}"\n  [showData]="${props.showData}">\n</dga-charts>`,
    generateCss: () => this.generateCssSnippet()
  };

  generateCssSnippet(): string {
    return `.dga-charts {\n  border: 1px solid var(--dga-border-neutral-primary);\n  border-radius: var(--dga-radius-md);\n  background: var(--dga-bg-card);\n  display: flex;\n  flex-direction: column;\n  font-family: var(--dga-font-text), sans-serif;\n  color: var(--dga-text-default);\n}\n\n.dga-charts__header {\n  padding: var(--dga-space-3) var(--dga-space-4);\n  border-bottom: 1px solid var(--dga-border-neutral-secondary);\n}\n\n.dga-charts__title {\n  font-size: var(--dga-text-md-size);\n  line-height: var(--dga-text-md-line);\n  font-weight: var(--dga-font-medium);\n}\n\n.dga-charts__body {\n  padding: var(--dga-space-4);\n}\n\n.dga-chart {\n  display: flex;\n  flex-direction: column;\n  gap: var(--dga-space-3);\n}\n\n.dga-chart__legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--dga-space-3);\n  align-items: center;\n}\n\n.dga-chart__legend-item {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--dga-space-2);\n  font-size: var(--dga-text-sm-size);\n  line-height: var(--dga-text-sm-line);\n  color: var(--dga-neutral-700);\n}\n\n.dga-chart__legend-mark {\n  width: 8px;\n  height: 8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dga-chart__legend-mark img {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.dga-chart__plot {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--dga-space-4);\n}\n\n.dga-chart__y-axis {\n  display: flex;\n  flex-direction: column;\n  gap: var(--dga-space-1);\n  flex: 1;\n}\n\n.dga-chart__y-line {\n  display: flex;\n  align-items: center;\n  gap: var(--dga-space-2);\n}\n\n.dga-chart__y-value {\n  width: 40px;\n  font-size: var(--dga-text-sm-size);\n  line-height: var(--dga-text-sm-line);\n  color: var(--dga-neutral-700);\n  text-align: right;\n}\n\n.dga-chart__divider {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n}\n\n.dga-chart__divider img {\n  width: 100%;\n  height: 1px;\n  display: block;\n}\n\n.dga-chart__bars {\n  display: flex;\n  gap: var(--dga-space-5);\n  align-items: flex-end;\n}\n\n.dga-chart__bar-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--dga-space-2);\n}\n\n.dga-chart__bar {\n  position: relative;\n  width: 32px;\n  height: 256px;\n}\n\n.dga-chart__bar-series {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n\n.dga-chart__bar-series--3 {\n  top: 0;\n}\n\n.dga-chart__bar-series--2 {\n  top: 29.17%;\n}\n\n.dga-chart__bar-series--1 {\n  top: 62.5%;\n}\n\n.dga-chart__bar-label {\n  font-size: var(--dga-text-sm-size);\n  line-height: var(--dga-text-sm-line);\n  color: var(--dga-neutral-700);\n}\n\n.dga-chart__y-label {\n  writing-mode: vertical-rl;\n  transform: rotate(180deg);\n  font-size: var(--dga-text-sm-size);\n  line-height: var(--dga-text-sm-line);\n  color: var(--dga-neutral-700);\n  text-align: center;\n}\n\n.dga-chart__y-label--line {\n  padding-right: var(--dga-space-2);\n}\n\n.dga-chart__x-label {\n  text-align: center;\n  font-size: var(--dga-text-sm-size);\n  line-height: var(--dga-text-sm-line);\n  color: var(--dga-neutral-700);\n}\n\n.dga-chart__line-area {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: var(--dga-space-2);\n}\n\n.dga-chart__line-series {\n  position: absolute;\n  left: 48px;\n  top: 0;\n  width: 438px;\n  height: 180px;\n}\n\n.dga-chart__line {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n\n.dga-chart__line--1 {\n  top: 43px;\n}\n\n.dga-chart__line--2 {\n  top: 93px;\n}\n\n.dga-chart__line--3 {\n  top: 100px;\n}\n\n.dga-chart__x-axis {\n  display: flex;\n  gap: var(--dga-space-5);\n  font-size: var(--dga-text-sm-size);\n  line-height: var(--dga-text-sm-line);\n  color: var(--dga-neutral-700);\n}\n\n.dga-chart__x-item {\n  min-width: 24px;\n}\n\n.dga-chart__pie {\n  width: 240px;\n  height: 240px;\n  margin: 0 auto;\n}\n\n.dga-chart__pie img {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.dga-chart__legend--center {\n  justify-content: center;\n}\n\n.dga-charts[dir='rtl'] {\n  direction: rtl;\n}\n\n.dga-charts[dir='rtl'] .dga-chart__y-value {\n  text-align: left;\n}\n\n.dga-charts[dir='rtl'] .dga-chart__y-label {\n  transform: rotate(0deg);\n}\n\n.dga-charts[dir='rtl'] .dga-chart__x-axis {\n  flex-direction: row-reverse;\n}\n`;
  }
}

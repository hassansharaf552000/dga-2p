import { Component } from '@angular/core';
import { DgaTabsComponent } from '../../components/dga-tabs/dga-tabs.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-tabs-playground',
  standalone: true,
  imports: [DgaTabsComponent, DgaPlaygroundComponent],
  templateUrl: './dga-tabs-playground.component.html',
  styleUrl: './dga-tabs-playground.component.scss'
})
export class DgaTabsPlaygroundComponent {
  componentProps = {
    activeTab: 'tab1',
    variant: 'default',
    orientation: 'horizontal',
    fullWidth: false,
    tabs: [
      { id: 'tab1', label: 'Overview' },
      { id: 'tab2', label: 'Features' },
      { id: 'tab3', label: 'Reviews' },
      { id: 'tab4', label: 'Support', disabled: true }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Tabs',
    description: 'Tabbed navigation component.',
    selector: 'dga-tabs',
    componentName: 'DgaTabs',
    textFields: [],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['default', 'pills', 'underline'] },
      { key: 'orientation', label: 'Orientation', type: 'select', options: ['horizontal', 'vertical'] }
    ],
    booleanFields: [
      { key: 'fullWidth', label: 'Full Width', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-tabs
  variant="${props.variant}"
  orientation="${props.orientation}"
  [tabs]="tabItems">
</dga-tabs>`,
    generateCss: () => ''
  };
}

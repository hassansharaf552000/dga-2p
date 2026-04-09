import { Component } from '@angular/core';
import { DgaProgressIndicatorComponent } from '../../components/dga-progress-indicator/dga-progress-indicator.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-progress-indicator-playground',
  standalone: true,
  imports: [DgaProgressIndicatorComponent, DgaPlaygroundComponent],
  templateUrl: './dga-progress-indicator-playground.component.html',
  styleUrl: './dga-progress-indicator-playground.component.scss'
})
export class DgaProgressIndicatorPlaygroundComponent {
  componentProps = {
    steps: [
      { label: 'Step 1', completed: true },
      { label: 'Step 2', completed: true },
      { label: 'Step 3', completed: false, active: true },
      { label: 'Step 4', completed: false }
    ],
    variant: 'horizontal'
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Progress Indicator',
    description: 'Step-by-step progress visualization.',
    selector: 'dga-progress-indicator',
    componentName: 'DgaProgressIndicator',
    textFields: [],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['horizontal', 'vertical'] }
    ],
    booleanFields: [],
    generateHtml: (props) => `<dga-progress-indicator
  [steps]="steps"
  variant="${props.variant}">
</dga-progress-indicator>`,
    generateCss: () => ''
  };
}

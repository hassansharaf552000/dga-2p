import { Component } from '@angular/core';
import { DgaRadialStepperComponent } from '../../components/dga-radial-stepper/dga-radial-stepper.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-radial-stepper-playground',
  standalone: true,
  imports: [DgaRadialStepperComponent, DgaPlaygroundComponent],
  templateUrl: './dga-radial-stepper-playground.component.html',
  styleUrl: './dga-radial-stepper-playground.component.scss'
})
export class DgaRadialStepperPlaygroundComponent {
  componentProps = {
    size: 'md',
    showLabels: true,
    showProgress: true,
    steps: [
      { id: '1', label: 'Account', status: 'completed' },
      { id: '2', label: 'Profile', status: 'completed' },
      { id: '3', label: 'Settings', status: 'current' },
      { id: '4', label: 'Review', status: 'upcoming' },
      { id: '5', label: 'Complete', status: 'upcoming' }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Radial Stepper',
    description: 'Circular progress stepper.',
    selector: 'dga-radial-stepper',
    componentName: 'DgaRadialStepper',
    textFields: [],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['sm', 'md', 'lg'] }
    ],
    booleanFields: [
      { key: 'showLabels', label: 'Show Labels', type: 'boolean' },
      { key: 'showProgress', label: 'Show Progress', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-radial-stepper
  size="${props.size}"
  [showLabels]="${props.showLabels}"
  [steps]="steps">
</dga-radial-stepper>`,
    generateCss: () => ''
  };
}

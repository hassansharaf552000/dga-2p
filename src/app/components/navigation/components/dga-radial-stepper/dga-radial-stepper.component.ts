import { Component, Input } from '@angular/core';

interface StepperStep {
  id: string;
  label: string;
  status: 'completed' | 'current' | 'upcoming' | 'error';
}

@Component({
  selector: 'dga-radial-stepper',
  standalone: true,
  imports: [],
  templateUrl: './dga-radial-stepper.component.html',
  styleUrl: './dga-radial-stepper.component.scss'
})
export class DgaRadialStepperComponent {
  @Input() steps: readonly StepperStep[] = [
    { id: '1', label: 'Step 1', status: 'completed' },
    { id: '2', label: 'Step 2', status: 'completed' },
    { id: '3', label: 'Step 3', status: 'current' },
    { id: '4', label: 'Step 4', status: 'upcoming' },
    { id: '5', label: 'Step 5', status: 'upcoming' }
  ];
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() showLabels = true;
  @Input() showProgress = true;

  get completedSteps(): number {
    return this.steps.filter(s => s.status === 'completed').length;
  }

  get progressPercent(): number {
    return (this.completedSteps / this.steps.length) * 100;
  }
}

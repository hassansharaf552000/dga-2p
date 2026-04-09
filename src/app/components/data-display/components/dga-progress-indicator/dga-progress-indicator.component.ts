import { Component, Input } from '@angular/core';

type ProgressIndicatorVariant = 'horizontal' | 'vertical';

export interface ProgressStep {
  label: string;
  completed: boolean;
  active?: boolean;
}

@Component({
  selector: 'dga-progress-indicator',
  standalone: true,
  imports: [],
  templateUrl: './dga-progress-indicator.component.html',
  styleUrl: './dga-progress-indicator.component.scss'
})
export class DgaProgressIndicatorComponent {
  @Input() steps: readonly ProgressStep[] = [
    { label: 'Step 1', completed: true },
    { label: 'Step 2', completed: true },
    { label: 'Step 3', completed: false, active: true },
    { label: 'Step 4', completed: false }
  ];
  @Input() variant: ProgressIndicatorVariant = 'horizontal';
}

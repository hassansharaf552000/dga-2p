import { Component, Input } from '@angular/core';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
type TooltipTrigger = 'hover' | 'click' | 'focus';

@Component({
  selector: 'dga-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './dga-tooltip.component.html',
  styleUrl: './dga-tooltip.component.scss'
})
export class DgaTooltipComponent {
  @Input() content = 'Tooltip text';
  @Input() position: TooltipPosition = 'top';
  @Input() trigger: TooltipTrigger = 'hover';
  @Input() showArrow = true;
  @Input() delay = 200;
  @Input() maxWidth = 250;
}

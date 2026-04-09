import { Component } from '@angular/core';
import { DgaTooltipComponent } from '../../components/dga-tooltip/dga-tooltip.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-tooltip-playground',
  standalone: true,
  imports: [DgaTooltipComponent, DgaPlaygroundComponent],
  templateUrl: './dga-tooltip-playground.component.html',
  styleUrl: './dga-tooltip-playground.component.scss'
})
export class DgaTooltipPlaygroundComponent {
  componentProps = {
    content: 'This is helpful tooltip text',
    position: 'top',
    trigger: 'hover',
    showArrow: true,
    maxWidth: 250
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Tooltip',
    description: 'Contextual tooltip component.',
    selector: 'dga-tooltip',
    componentName: 'DgaTooltip',
    textFields: [
      { key: 'content', label: 'Content', type: 'text' },
      { key: 'maxWidth', label: 'Max Width (px)', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'position', label: 'Position', type: 'select', options: ['top', 'bottom', 'left', 'right'] },
      { key: 'trigger', label: 'Trigger', type: 'select', options: ['hover', 'click', 'focus'] }
    ],
    booleanFields: [
      { key: 'showArrow', label: 'Show Arrow', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-tooltip
  content="${props.content}"
  position="${props.position}">
  <button>Hover me</button>
</dga-tooltip>`,
    generateCss: () => ''
  };
}

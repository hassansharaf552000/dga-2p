import { Component } from '@angular/core';
import { DgaFloatingButtonComponent } from '../../components/dga-floating-button/dga-floating-button.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-floating-button-playground',
  standalone: true,
  imports: [DgaFloatingButtonComponent, DgaPlaygroundComponent],
  templateUrl: './dga-floating-button-playground.component.html',
  styleUrl: './dga-floating-button-playground.component.scss'
})
export class DgaFloatingButtonPlaygroundComponent {
  componentProps = {
    icon: '+',
    label: 'Create',
    position: 'bottom-right',
    size: 'md',
    color: '#0066cc',
    extended: false,
    disabled: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Floating Button',
    description: 'Floating action button (FAB).',
    selector: 'dga-floating-button',
    componentName: 'DgaFloatingButton',
    textFields: [
      { key: 'icon', label: 'Icon', type: 'text' },
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'color', label: 'Color', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'position', label: 'Position', type: 'select', options: ['bottom-right', 'bottom-left', 'bottom-center', 'top-right', 'top-left'] },
      { key: 'size', label: 'Size', type: 'select', options: ['sm', 'md', 'lg'] }
    ],
    booleanFields: [
      { key: 'extended', label: 'Extended', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-floating-button
  icon="${props.icon}"
  label="${props.label}"
  position="${props.position}"
  size="${props.size}">
</dga-floating-button>`,
    generateCss: () => ''
  };
}

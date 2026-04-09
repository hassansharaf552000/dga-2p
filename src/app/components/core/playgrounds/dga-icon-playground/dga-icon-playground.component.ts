import { Component } from '@angular/core';
import { DgaIconComponent } from '../../components/dga-icon/dga-icon.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-icon-playground',
  standalone: true,
  imports: [DgaIconComponent, DgaPlaygroundComponent],
  templateUrl: './dga-icon-playground.component.html',
  styleUrl: './dga-icon-playground.component.scss'
})
export class DgaIconPlaygroundComponent {
  componentProps = {
    name: 'star',
    size: 'medium',
    color: '#0066cc'
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Icon',
    description: 'Scalable vector icons for UI elements.',
    selector: 'dga-icon',
    componentName: 'DgaIcon',
    textFields: [
      { key: 'name', label: 'Icon Name', type: 'text' },
      { key: 'color', label: 'Color', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] }
    ],
    booleanFields: [],
    generateHtml: (props) => `<dga-icon
  name="${props.name}"
  size="${props.size}"
  color="${props.color}">
</dga-icon>`,
    generateCss: () => ''
  };
}

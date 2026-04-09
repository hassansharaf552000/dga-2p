import { Component } from '@angular/core';
import { DgaDividerComponent } from '../../components/dga-divider/dga-divider.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-divider-playground',
  standalone: true,
  imports: [DgaDividerComponent, DgaPlaygroundComponent],
  templateUrl: './dga-divider-playground.component.html',
  styleUrl: './dga-divider-playground.component.scss'
})
export class DgaDividerPlaygroundComponent {
  componentProps = {
    orientation: 'horizontal',
    variant: 'solid',
    label: ''
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Divider',
    description: 'Visual separator for content sections.',
    selector: 'dga-divider',
    componentName: 'DgaDivider',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'orientation', label: 'Orientation', type: 'select', options: ['horizontal', 'vertical'] },
      { key: 'variant', label: 'Variant', type: 'select', options: ['solid', 'dashed', 'dotted'] }
    ],
    booleanFields: [],
    generateHtml: (props) => `<dga-divider
  orientation="${props.orientation}"
  variant="${props.variant}"
  label="${props.label}">
</dga-divider>`,
    generateCss: () => ''
  };
}

import { Component } from '@angular/core';
import { DgaLoadingComponent } from '../../components/dga-loading/dga-loading.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-loading-playground',
  standalone: true,
  imports: [DgaLoadingComponent, DgaPlaygroundComponent],
  templateUrl: './dga-loading-playground.component.html',
  styleUrl: './dga-loading-playground.component.scss'
})
export class DgaLoadingPlaygroundComponent {
  componentProps = {
    variant: 'spinner',
    size: 'md',
    label: 'Loading...',
    overlay: false,
    color: '#0066cc'
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Loading',
    description: 'Loading spinner and indicator component.',
    selector: 'dga-loading',
    componentName: 'DgaLoading',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'color', label: 'Color', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['spinner', 'dots', 'bar', 'pulse'] },
      { key: 'size', label: 'Size', type: 'select', options: ['sm', 'md', 'lg', 'xl'] }
    ],
    booleanFields: [
      { key: 'overlay', label: 'Overlay', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-loading
  variant="${props.variant}"
  size="${props.size}"
  label="${props.label}">
</dga-loading>`,
    generateCss: () => ''
  };
}

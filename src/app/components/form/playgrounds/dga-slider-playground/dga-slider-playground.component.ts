import { Component } from '@angular/core';
import { DgaSliderComponent } from '../../components/dga-slider/dga-slider.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-slider-playground',
  standalone: true,
  imports: [DgaSliderComponent, DgaPlaygroundComponent],
  templateUrl: './dga-slider-playground.component.html',
  styleUrl: './dga-slider-playground.component.scss'
})
export class DgaSliderPlaygroundComponent {
  componentProps = {
    label: 'Volume',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    showValue: true,
    disabled: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Slider',
    description: 'Range input for selecting numeric values.',
    selector: 'dga-slider',
    componentName: 'DgaSlider',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'min', label: 'Min', type: 'text' },
      { key: 'max', label: 'Max', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'showValue', label: 'Show Value', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-slider
  label="${props.label}"
  [min]="${props.min}"
  [max]="${props.max}">
</dga-slider>`,
    generateCss: () => ''
  };
}

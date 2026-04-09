import { Component } from '@angular/core';
import { DgaRatingComponent } from '../../components/dga-rating/dga-rating.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-rating-playground',
  standalone: true,
  imports: [DgaRatingComponent, DgaPlaygroundComponent],
  templateUrl: './dga-rating-playground.component.html',
  styleUrl: './dga-rating-playground.component.scss'
})
export class DgaRatingPlaygroundComponent {
  componentProps = {
    value: 3,
    max: 5,
    size: 'medium',
    readonly: false,
    disabled: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Rating',
    description: 'Star-based rating input.',
    selector: 'dga-rating',
    componentName: 'DgaRating',
    textFields: [
      { key: 'value', label: 'Value', type: 'text' },
      { key: 'max', label: 'Max Stars', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] }
    ],
    booleanFields: [
      { key: 'readonly', label: 'Readonly', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-rating
  [value]="${props.value}"
  [max]="${props.max}"
  size="${props.size}">
</dga-rating>`,
    generateCss: () => ''
  };
}

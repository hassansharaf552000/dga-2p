import { Component } from '@angular/core';
import { DgaSkeletonComponent } from '../../components/dga-skeleton/dga-skeleton.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-skeleton-playground',
  standalone: true,
  imports: [DgaSkeletonComponent, DgaPlaygroundComponent],
  templateUrl: './dga-skeleton-playground.component.html',
  styleUrl: './dga-skeleton-playground.component.scss'
})
export class DgaSkeletonPlaygroundComponent {
  componentProps = {
    variant: 'text',
    width: '100%',
    height: '20px',
    lines: 3,
    animated: true
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Skeleton',
    description: 'Loading placeholder for content.',
    selector: 'dga-skeleton',
    componentName: 'DgaSkeleton',
    textFields: [
      { key: 'width', label: 'Width', type: 'text' },
      { key: 'height', label: 'Height', type: 'text' },
      { key: 'lines', label: 'Lines', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['text', 'circle', 'rectangle', 'card'] }
    ],
    booleanFields: [
      { key: 'animated', label: 'Animated', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-skeleton
  variant="${props.variant}"
  [lines]="${props.lines}"
  [animated]="${props.animated}">
</dga-skeleton>`,
    generateCss: () => ''
  };
}

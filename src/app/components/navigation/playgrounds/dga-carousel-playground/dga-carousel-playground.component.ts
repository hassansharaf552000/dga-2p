import { Component } from '@angular/core';
import {
  CarouselVariant,
  DgaCarouselComponent
} from '../../components/dga-carousel/dga-carousel.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

interface CarouselPlaygroundProps {
  variant: CarouselVariant;
  rtl: boolean;
  loop: boolean;
  total: string;
  current: number;
}

@Component({
  selector: 'dga-carousel-playground',
  standalone: true,
  imports: [DgaCarouselComponent, DgaPlaygroundComponent],
  templateUrl: './dga-carousel-playground.component.html',
  styleUrl: './dga-carousel-playground.component.scss'
})
export class DgaCarouselPlaygroundComponent {
  componentProps: CarouselPlaygroundProps = {
    variant: 'dots',
    rtl: false,
    loop: false,
    total: '4',
    current: 0
  };

  playgroundConfig: PlaygroundConfig = {
    title: 'Carousel',
    description: 'Carousel navigation with dots, arrows, and dots-only variants.',
    selector: 'dga-carousel',
    componentName: 'DgaCarousel',
    textFields: [
      { key: 'total', label: 'Total slides', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['dots', 'arrows', 'dots-only'] },
      { key: 'current', label: 'Current slide', type: 'select', options: ['0', '1', '2', '3'] }
    ],
    booleanFields: [
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      { key: 'loop', label: 'Loop', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props as CarouselPlaygroundProps),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: CarouselPlaygroundProps): string {
    const attrs = [
      `variant="${props.variant}"`,
      `[total]="${Number(props.total) || 1}"`,
      `[current]="${props.current}"`,
      props.rtl ? '[rtl]="true"' : '',
      props.loop ? '[loop]="true"' : ''
    ].filter(Boolean);

    return [`<dga-carousel`, ...attrs.map((attr) => `  ${attr}`), `></dga-carousel>`].join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--dga-space-6);
  width: 100%;
  font-family: var(--dga-font-text), sans-serif;
}

.dga-carousel__content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 44px;
  width: 100%;
}

.dga-carousel__slide {
  display: flex;
  flex: 1;
  min-height: 136px;
  align-items: center;
  justify-content: center;
  border: 1px dashed var(--dga-border-brand);
  border-radius: var(--dga-radius-sm);
  background: var(--dga-bg-brand-light);
  color: var(--dga-text-brand-secondary);
  text-align: center;
}

.dga-carousel__arrow {
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: var(--dga-radius-full);
  background: var(--dga-600);
  color: var(--dga-text-on-color);
}

.dga-carousel__dots {
  display: inline-flex;
  align-items: center;
  gap: var(--dga-space-2);
  padding: var(--dga-space-3);
}

.dga-carousel__dot {
  width: 12px;
  height: 12px;
  border: 0;
  border-radius: var(--dga-radius-full);
  background: var(--dga-neutral-300);
}

.dga-carousel__dot--active {
  width: 32px;
  background: var(--dga-600);
}
`;
  }
}

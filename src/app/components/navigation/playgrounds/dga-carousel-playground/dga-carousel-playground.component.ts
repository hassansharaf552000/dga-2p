import { Component } from '@angular/core';
import { DgaCarouselComponent } from '../../components/dga-carousel/dga-carousel.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type CarouselStyle = 'dots' | 'arrows' | 'dots-only';

@Component({
  selector: 'dga-carousel-playground',
  standalone: true,
  imports: [DgaCarouselComponent, DgaPlaygroundComponent],
  templateUrl: './dga-carousel-playground.component.html',
  styleUrl: './dga-carousel-playground.component.scss'
})
export class DgaCarouselPlaygroundComponent {
  componentProps = {
    style: 'dots' as CarouselStyle,
    rtl: false,
    total: 4,
    current: 0
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Carousel',
    description: 'Carousel with dots or arrows style variants.',
    selector: 'dga-carousel',
    componentName: 'DgaCarousel',
    textFields: [],
    textareaFields: [],
    selectFields: [
      { key: 'style', label: 'Style', type: 'select', options: ['dots', 'arrows', 'dots-only'] }
    ],
    booleanFields: [
      { key: 'rtl', label: 'RTL', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-carousel\n  style="${props.style}"\n  [rtl]="${props.rtl}"\n  [total]="${props.total}"\n  [current]="${props.current}">\n</dga-carousel>`,
    generateCss: () => this.generateCssSnippet()
  };

  generateCssSnippet(): string {
    return `.dga-carousel {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--dga-space-6);\n  font-family: var(--dga-font-text), sans-serif;\n}\n\n.dga-carousel__content {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 44px;\n}\n\n.dga-carousel__swap {\n  flex: 1;\n  border: 1px dashed var(--dga-border-brand);\n  background: var(--dga-bg-brand-light);\n  padding: var(--dga-space-4);\n  border-radius: var(--dga-radius-sm);\n  text-align: center;\n  color: var(--dga-text-brand-secondary);\n}\n\n.dga-carousel__swap-title {\n  margin: 0 0 var(--dga-space-3);\n  font-weight: var(--dga-font-semibold);\n  font-size: var(--dga-text-sm-size);\n  line-height: var(--dga-text-sm-line);\n}\n\n.dga-carousel__swap-subtitle {\n  margin: 0;\n  font-weight: var(--dga-font-semibold);\n  font-size: var(--dga-text-sm-size);\n  line-height: var(--dga-text-sm-line);\n}\n\n.dga-carousel__arrow {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--dga-radius-full);\n  background: var(--dga-600);\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.dga-carousel__arrow img {\n  width: 24px;\n  height: 24px;\n}\n\n.dga-carousel__dots {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--dga-space-2);\n  padding: var(--dga-space-3);\n  border-radius: var(--dga-radius-full);\n}\n\n.dga-carousel__dot {\n  width: 12px;\n  height: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dga-carousel__dot img {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.dga-carousel--dots-only .dga-carousel__dots {\n  padding: var(--dga-space-1) var(--dga-space-3);\n}\n\n.dga-carousel[dir='rtl'] .dga-carousel__content {\n  flex-direction: row-reverse;\n}\n`;
  }
}

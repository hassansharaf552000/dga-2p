import { Component } from '@angular/core';
import { DgaCardComponent } from '../../components/dga-card/dga-card.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type Effect = 'shadow' | 'none' | 'stroke';
type State = 'default' | 'hover' | 'focused' | 'disabled';

@Component({
  selector: 'dga-card-playground',
  standalone: true,
  imports: [DgaCardComponent, DgaPlaygroundComponent],
  templateUrl: './dga-card-playground.component.html',
  styleUrl: './dga-card-playground.component.scss'
})
export class DgaCardPlaygroundComponent {
  readonly imageUrl = 'https://www.figma.com/api/mcp/asset/e162f47d-bf90-4ee0-ae7b-a4ea96e341e1';
  readonly featuredIconUrl = 'https://www.figma.com/api/mcp/asset/e4ce3402-c7a9-4d4d-a135-923d31b89aa5';
  readonly starFullUrl = 'https://www.figma.com/api/mcp/asset/2d8f12b5-8e85-48d0-aa36-6d0b1ef07704';
  readonly tags = ['Label', 'Label', 'Label'];
  readonly stars = Array.from({ length: 5 }, (_, i) => i);

  componentProps = {
    title: 'Card Title',
    description: 'Card content placeholder text goes here',
    effect: 'shadow' as Effect,
    state: 'default' as State,
    rtl: false,
    showImage: false,
    showFeaturedIcon: true,
    showTags: false,
    showRating: false,
    showPrimaryAction: true,
    showSecondaryAction: true
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Card',
    description: 'Build card variants by toggling tokens and features.',
    selector: 'dga-card',
    componentName: 'DgaCard',
    textFields: [
      { key: 'title', label: 'Title', type: 'text' }
    ],
    textareaFields: [
      { key: 'description', label: 'Description', type: 'textarea' }
    ],
    selectFields: [
      { 
        key: 'effect', 
        label: 'Effect', 
        type: 'select', 
        options: ['shadow', 'none', 'stroke'] 
      },
      { 
        key: 'state', 
        label: 'State', 
        type: 'select', 
        options: ['default', 'hover', 'focused', 'disabled'] 
      }
    ],
    booleanFields: [
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      { key: 'showImage', label: 'Image', type: 'boolean' },
      { key: 'showFeaturedIcon', label: 'Featured icon', type: 'boolean' },
      { key: 'showTags', label: 'Tags', type: 'boolean' },
      { key: 'showRating', label: 'Rating', type: 'boolean' },
      { key: 'showPrimaryAction', label: 'Primary action', type: 'boolean' },
      { key: 'showSecondaryAction', label: 'Secondary action', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: any): string {
    const classes = ['card', `card--${props.effect}`, `card--${props.state}`];
    if (props.rtl) {
      classes.push('card--rtl');
    }

    const lines: string[] = [];
    lines.push(`<article class="${classes.join(' ')}"${props.rtl ? ' dir="rtl"' : ''}>`);

    if (props.showImage) {
      lines.push('  <div class="card__image">');
      lines.push(`    <img src="${this.imageUrl}" alt="" />`);
      lines.push('  </div>');
    }

    if (props.showFeaturedIcon) {
      lines.push('  <div class="card__featured">');
      lines.push('    <span class="card__icon-shell">');
      lines.push(`      <img src="${this.featuredIconUrl}" alt="" />`);
      lines.push('    </span>');
      lines.push('  </div>');
    }

    lines.push('  <div class="card__content">');
    lines.push(`    <h3 class="card__title">${props.title}</h3>`);
    lines.push(`    <p class="card__desc">${props.description}</p>`);
    lines.push('  </div>');

    if (props.showTags) {
      lines.push('  <div class="card__tags">');
      this.tags.forEach((tag) => {
        lines.push(`    <span class="card__tag">${tag}</span>`);
      });
      lines.push('  </div>');
    }

    if (props.showRating) {
      lines.push('  <div class="card__rating">');
      lines.push('    <div class="card__stars">');
      this.stars.forEach(() => {
        lines.push(`      <img src="${this.starFullUrl}" alt="" />`);
      });
      lines.push('    </div>');
      lines.push('    <span class="card__reviews">12 reviews</span>');
      lines.push('  </div>');
    }

    if (props.showPrimaryAction) {
      lines.push('  <div class="card__actions">');
      if (props.showSecondaryAction) {
        lines.push('    <button class="card__btn card__btn--secondary">Action</button>');
      }
      lines.push('    <button class="card__btn card__btn--primary">Action</button>');
      lines.push('  </div>');
    }

    lines.push('</article>');
    return lines.join('\n');
  }

  generateCssSnippet(): string {
    return `.card {
  background: var(--dga-bg-card);
  border-radius: var(--dga-radius-lg);
  display: flex;
  flex-direction: column;
  gap: var(--dga-space-6);
  padding: var(--dga-space-4);
  width: 360px;
  color: var(--dga-text-display);
  font-family: var(--dga-font-text), sans-serif;
  transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.card--shadow {
  box-shadow: 0 4px 8px 0 rgba(16, 24, 40, 0.1), 0 2px 4px 0 rgba(16, 24, 40, 0.06);
}

.card--none {
  box-shadow: none;
}

.card--stroke {
  border: 1px solid var(--dga-border-neutral-primary);
  box-shadow: none;
}

.card--hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px 0 rgba(16, 24, 40, 0.14);
}

.card--focused {
  box-shadow: 0 0 0 2px var(--dga-border-brand);
}

.card--disabled {
  opacity: 0.6;
  pointer-events: none;
}

.card--rtl {
  text-align: right;
}

.card__image {
  width: 100%;
  height: 250px;
  border-radius: var(--dga-radius-md);
  overflow: hidden;
}

.card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card__featured {
  display: flex;
}

.card__icon-shell {
  width: 48px;
  height: 48px;
  border-radius: var(--dga-radius-full);
  background: var(--dga-bg-brand-light);
  display: grid;
  place-items: center;
}

.card__icon-shell img {
  width: 24px;
  height: 24px;
}

.card__content {
  display: flex;
  flex-direction: column;
  gap: var(--dga-space-2);
}

.card__title {
  font-size: var(--dga-text-lg-size);
  line-height: var(--dga-text-lg-line);
  font-weight: var(--dga-font-bold);
  margin: 0;
}

.card__desc {
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
  margin: 0;
}

.card__tags {
  display: flex;
  gap: var(--dga-space-2);
  flex-wrap: wrap;
}

.card__tag {
  background: var(--dga-bg-card);
  border: 1px solid var(--dga-border-neutral-secondary);
  color: var(--dga-text-display);
  border-radius: var(--dga-radius-sm);
  padding: 2px var(--dga-space-2);
  font-size: var(--dga-text-xs-size);
  line-height: var(--dga-text-xs-line);
  font-weight: var(--dga-font-medium);
}

.card__rating {
  display: flex;
  flex-direction: column;
  gap: var(--dga-space-1);
}

.card__stars {
  display: flex;
  gap: var(--dga-space-1);
}

.card__stars img {
  width: 24px;
  height: 24px;
}

.card__reviews {
  font-size: var(--dga-text-xs-size);
  line-height: var(--dga-text-xs-line);
  color: var(--dga-text-tertiary);
}

.card__actions {
  display: flex;
  gap: var(--dga-space-4);
}

.card__btn {
  height: 40px;
  border-radius: var(--dga-radius-sm);
  padding: 0 var(--dga-space-4);
  border: 1px solid transparent;
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
  font-weight: var(--dga-font-medium);
  background: transparent;
  cursor: pointer;
}

.card__btn--primary {
  background: var(--dga-600);
  color: var(--dga-text-on-color);
}

.card__btn--secondary {
  border-color: var(--dga-border-neutral-primary);
  color: var(--dga-text-default);
  background: var(--dga-bg-card);
}
`;
  }
}
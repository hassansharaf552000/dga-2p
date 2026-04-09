import { Component } from '@angular/core';
import { DgaBreadcrumbComponent } from '../../components/dga-breadcrumb/dga-breadcrumb.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-breadcrumb-playground',
  standalone: true,
  imports: [DgaBreadcrumbComponent, DgaPlaygroundComponent],
  templateUrl: './dga-breadcrumb-playground.component.html',
  styleUrl: './dga-breadcrumb-playground.component.scss'
})
export class DgaBreadcrumbPlaygroundComponent {
  readonly separatorIconUrl = 'https://www.figma.com/api/mcp/asset/5b4c83e7-c293-4592-8208-5bc1aa33aa53';

  componentProps = {
    separator: '/',
    showHome: true,
    rtl: false,
    useIconSeparator: true,
    maxItems: 3,
    items: [
      { label: 'Link', url: '/' },
      { label: 'Link', url: '/products' },
      { label: 'Link', url: '/products/category' },
      { label: 'Link', url: '/products/category/sub' },
      { label: 'Link' }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Breadcrumb',
    description: 'Navigation breadcrumb trail with icon separators and RTL support.',
    selector: 'dga-breadcrumb',
    componentName: 'DgaBreadcrumb',
    textFields: [
      { key: 'separator', label: 'Separator', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'showHome', label: 'Show first item', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      { key: 'useIconSeparator', label: 'Icon separator', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: any): string {
    const lines: string[] = [];
    lines.push(`<nav class="dga-breadcrumb" aria-label="Breadcrumb"${props.rtl ? ' dir="rtl"' : ''}>`);
    lines.push('  <ol class="dga-breadcrumb__list">');
    lines.push('    <li class="dga-breadcrumb__item">');
    lines.push('      <a class="dga-breadcrumb__link" href="/">Link</a>');
    if (props.useIconSeparator) {
      lines.push('      <span class="dga-breadcrumb__separator" aria-hidden="true">');
      lines.push(`        <img src="${this.separatorIconUrl}" alt="" />`);
      lines.push('      </span>');
    } else {
      lines.push(`      <span class="dga-breadcrumb__separator">${props.separator}</span>`);
    }
    lines.push('    </li>');
    lines.push('    <li class="dga-breadcrumb__item dga-breadcrumb__item--overflow">');
    lines.push('      <button class="dga-breadcrumb__overflow" type="button">');
    lines.push('        <span class="dga-breadcrumb__link">...</span>');
    lines.push('      </button>');
    if (props.useIconSeparator) {
      lines.push('      <span class="dga-breadcrumb__separator" aria-hidden="true">');
      lines.push(`        <img src="${this.separatorIconUrl}" alt="" />`);
      lines.push('      </span>');
    } else {
      lines.push(`      <span class="dga-breadcrumb__separator">${props.separator}</span>`);
    }
    lines.push('    </li>');
    lines.push('    <li class="dga-breadcrumb__item">');
    lines.push('      <span class="dga-breadcrumb__current" aria-current="page">Link</span>');
    lines.push('    </li>');
    lines.push('  </ol>');
    lines.push('</nav>');
    return lines.join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-breadcrumb {
  font-family: var(--dga-font-text), sans-serif;
  font-size: var(--dga-text-sm-size);
  line-height: var(--dga-text-sm-line);
  color: var(--dga-neutral-700);
}

.dga-breadcrumb__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--dga-space-0);
  list-style: none;
  padding: 0;
  margin: 0;
}

.dga-breadcrumb__item {
  display: flex;
  align-items: center;
  gap: var(--dga-space-1);
}

.dga-breadcrumb__link {
  color: var(--dga-neutral-700);
  text-decoration: none;
  transition: color 0.2s ease;
}

.dga-breadcrumb__link:hover {
  color: var(--dga-neutral-800);
  text-decoration: underline;
}

.dga-breadcrumb__current {
  color: var(--dga-neutral-400);
  font-weight: var(--dga-font-regular);
}

.dga-breadcrumb__separator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.dga-breadcrumb__separator img {
  width: 100%;
  height: 100%;
  display: block;
}

.dga-breadcrumb__item--overflow {
  position: relative;
}

.dga-breadcrumb__overflow {
  display: inline-flex;
  align-items: center;
  gap: var(--dga-space-1);
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--dga-neutral-700);
  font: inherit;
}

.dga-breadcrumb__menu {
  position: absolute;
  top: 24px;
  left: 0;
  background: var(--dga-bg-card);
  border: 1px solid var(--dga-border-neutral-secondary);
  border-radius: var(--dga-radius-sm);
  padding: var(--dga-space-1);
  box-shadow: 0 20px 24px -4px rgba(16, 24, 40, 0.08),
    0 8px 8px -4px rgba(16, 24, 40, 0.03);
  min-width: 153px;
  z-index: 10;
}

.dga-breadcrumb__menu-item {
  display: block;
  padding: var(--dga-space-2);
  border-radius: var(--dga-radius-sm);
  color: var(--dga-neutral-700);
  text-decoration: none;
  font-size: var(--dga-text-sm-size);
  line-height: var(--dga-text-sm-line);
}

.dga-breadcrumb__menu-item:hover {
  background: #f3f4f6;
}

.dga-breadcrumb[dir='rtl'] .dga-breadcrumb__separator {
  transform: rotate(180deg);
}

.dga-breadcrumb[dir='rtl'] .dga-breadcrumb__menu {
  left: auto;
  right: 0;
}
`;
  }
}

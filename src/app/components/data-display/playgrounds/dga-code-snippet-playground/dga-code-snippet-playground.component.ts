import { Component } from '@angular/core';
import { DgaCodeSnippetComponent } from '../../components/dga-code-snippet/dga-code-snippet.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type CodeSnippetType = 'single-line' | 'multi-line';

@Component({
  selector: 'dga-code-snippet-playground',
  standalone: true,
  imports: [DgaCodeSnippetComponent, DgaPlaygroundComponent],
  templateUrl: './dga-code-snippet-playground.component.html',
  styleUrl: './dga-code-snippet-playground.component.scss'
})
export class DgaCodeSnippetPlaygroundComponent {
  readonly singleLineCopyIconUrl = 'https://www.figma.com/api/mcp/asset/982e546a-a71b-4693-bafe-d4605a6ff5da';
  readonly multiLineCopyIconUrl = 'https://www.figma.com/api/mcp/asset/59928426-d62e-41a8-b4ed-5bb7283d5d79';
  readonly showMoreIconUrl = 'https://www.figma.com/api/mcp/asset/00412967-f256-4ebe-b009-2a80a44ffae4';

  componentProps = {
    type: 'single-line' as CodeSnippetType,
    prefix: 'npm',
    code: 'npm install nds-design-system@^0.0.1',
    tabsText: 'Java, Python, C, C++, HTML, PHP',
    showCopyButton: true,
    showTabList: true,
    showSidebar: true,
    showShowMore: true
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Code Snippet',
    description: 'Code snippet block with single-line and multi-line variants.',
    selector: 'dga-code-snippet',
    componentName: 'DgaCodeSnippet',
    textFields: [
      { key: 'prefix', label: 'Prefix', type: 'text' }
    ],
    textareaFields: [
      { key: 'code', label: 'Code', type: 'textarea' },
      { key: 'tabsText', label: 'Tabs (comma or newline)', type: 'textarea' }
    ],
    selectFields: [
      { key: 'type', label: 'Type', type: 'select', options: ['single-line', 'multi-line'] }
    ],
    booleanFields: [
      { key: 'showCopyButton', label: 'Copy Button', type: 'boolean' },
      { key: 'showTabList', label: 'Show Tabs', type: 'boolean' },
      { key: 'showSidebar', label: 'Show Sidebar', type: 'boolean' },
      { key: 'showShowMore', label: 'Show More', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props),
    generateCss: () => this.generateCssSnippet()
  };

  get tabsList(): string[] {
    return this.parseTabs(this.componentProps.tabsText);
  }

  private parseTabs(value: string): string[] {
    if (!value) return [];
    return value
      .split(/\r?\n|,/)
      .map((tab) => tab.trim())
      .filter(Boolean);
  }

  generateHtmlSnippet(props: any): string {
    if (props.type === 'single-line') {
      return `<div class="code-snippet code-snippet--single">
  <div class="code-snippet__body">
    <div class="code-snippet__content">
      <div class="code-snippet__single">
        <span class="code-snippet__prefix">${props.prefix}</span>
        <span class="code-snippet__text">${props.code}</span>
      </div>
      ${props.showCopyButton ? `
      <button class="code-snippet__copy code-snippet__copy--single" type="button" aria-label="Copy">
        <img src="${this.singleLineCopyIconUrl}" alt="" />
      </button>` : ''}
    </div>
  </div>
</div>`;
    }

    const lines = props.code.split('\n');
    const lineNumbers = lines.map((_: string, i: number) => i + 1);

    const tabs = this.parseTabs(props.tabsText);
    const tabButtons = tabs.length
      ? tabs
      : ['Java', 'Python', 'C', 'C++', 'HTML', 'PHP'];
    const tabButtonsHtml = tabButtons.map((tab, index) => {
      const activeClass = index === 0 ? ' code-snippet__tab--active' : '';
      return `<button type="button" class="code-snippet__tab${activeClass}"><span class="code-snippet__tab-label">${tab}</span></button>`;
    }).join('\n      ');

    return `<div class="code-snippet code-snippet--multi">
  ${props.showTabList ? `<div class="code-snippet__tabs">
    <div class="code-snippet__tabs-divider"></div>
    <div class="code-snippet__tabs-list">
      ${tabButtonsHtml}
    </div>
  </div>` : ''}
  <div class="code-snippet__body">
    ${props.showSidebar ? `<div class="code-snippet__sidebar">
      ${lineNumbers.map((n: number) => `<span class="code-snippet__line-number">${n}</span>`).join('\n      ')}
    </div>` : ''}
    <div class="code-snippet__content">
      <div class="code-snippet__block">
        <pre class="code-snippet__pre"><code class="code-snippet__code">${props.code}</code></pre>
        ${props.showCopyButton ? `
        <button class="code-snippet__copy code-snippet__copy--multi" type="button" aria-label="Copy">
          <img src="${this.multiLineCopyIconUrl}" alt="" />
        </button>` : ''}
      </div>
      ${props.showShowMore ? `
      <button class="code-snippet__show-more" type="button">
        <span class="code-snippet__show-more-label">Show More</span>
        <img src="${this.showMoreIconUrl}" alt="" class="code-snippet__show-more-icon" />
      </button>` : ''}
    </div>
  </div>
</div>`;
  }

  generateCssSnippet(): string {
    return `.code-snippet {
  border: 1px solid var(--dga-border-neutral-secondary);
  border-radius: var(--dga-radius-lg);
  background: var(--dga-bg-card);
  overflow: hidden;
  color: var(--dga-text-default);
}

.code-snippet--single .code-snippet__body {
  padding: 24px;
}

.code-snippet--single .code-snippet__content {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0;
}

.code-snippet__tabs {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.code-snippet__tabs-divider {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: var(--dga-border-neutral-primary);
  border-radius: var(--dga-radius-full);
}

.code-snippet__tabs-list {
  display: flex;
  align-items: center;
}

.code-snippet__tab {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--dga-radius-sm);
  color: var(--dga-text-secondary);
  font-family: var(--dga-font-text), sans-serif;
  font-weight: var(--dga-font-medium);
  font-size: var(--dga-text-sm-size);
  line-height: var(--dga-text-sm-line);
}

.code-snippet__tab--active {
  color: var(--dga-text-default);
  font-weight: var(--dga-font-bold);
}

.code-snippet__tab--active::after {
  content: '';
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 0;
  height: 3px;
  background: var(--dga-600);
  border-radius: var(--dga-radius-full);
}

.code-snippet__body {
  display: flex;
}

.code-snippet__sidebar {
  background: var(--dga-neutral-50);
  border-right: 1px solid var(--dga-border-neutral-secondary);
  padding: 24px;
  font-family: 'Roboto Mono', monospace;
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
  color: #667085;
  font-weight: var(--dga-font-bold);
}

.code-snippet__line-number {
  display: block;
}

.code-snippet__content {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 24px 32px;
}

.code-snippet__single {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  font-family: 'Roboto Mono', monospace;
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
}

.code-snippet__prefix {
  color: var(--dga-gold-600);
}

.code-snippet__text {
  color: var(--dga-600);
}

.code-snippet__block {
  position: relative;
  padding-right: 48px;
}

.code-snippet__pre {
  margin: 0;
  font-family: 'Roboto Mono', monospace;
  font-size: var(--dga-text-md-size);
  line-height: var(--dga-text-md-line);
  color: var(--dga-text-default);
  white-space: pre-wrap;
}

.code-snippet__line {
  display: block;
}

.code-snippet__line--comment {
  color: var(--dga-neutral-400);
}

.code-snippet__copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: var(--dga-radius-sm);
  cursor: pointer;
}

.code-snippet__copy--single {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.code-snippet__copy--multi {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
}

.code-snippet__copy img {
  width: 24px;
  height: 24px;
  display: block;
}

.code-snippet__show-more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 32px;
  padding: 0 12px;
  border: none;
  background: transparent;
  border-radius: var(--dga-radius-sm);
  cursor: pointer;
  font-family: var(--dga-font-text), sans-serif;
  font-weight: var(--dga-font-medium);
  font-size: var(--dga-text-sm-size);
  line-height: var(--dga-text-sm-line);
  color: var(--dga-text-default);
  align-self: flex-end;
}

.code-snippet__show-more-icon {
  width: 24px;
  height: 24px;
  display: block;
}

@media (max-width: 768px) {
  .code-snippet__body {
    flex-direction: column;
  }

  .code-snippet__sidebar {
    border-right: none;
    border-bottom: 1px solid var(--dga-border-neutral-secondary);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
`;
  }
}

import { Component } from '@angular/core';
import {
  ContentSwitcherSize,
  DgaContentSwitcherComponent
} from '../../components/dga-content-switcher/dga-content-switcher.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

interface ContentSwitcherPlaygroundProps {
  size: ContentSwitcherSize;
  selectedId: string;
  onColor: boolean;
  rtl: boolean;
}

@Component({
  selector: 'dga-content-switcher-playground',
  standalone: true,
  imports: [DgaContentSwitcherComponent, DgaPlaygroundComponent],
  templateUrl: './dga-content-switcher-playground.component.html',
  styleUrl: './dga-content-switcher-playground.component.scss'
})
export class DgaContentSwitcherPlaygroundComponent {
  readonly items = [
    { id: 'item1', label: 'Item' },
    { id: 'item2', label: 'Item' },
    { id: 'item3', label: 'Item' },
    { id: 'item4', label: 'Item' }
  ];

  componentProps: ContentSwitcherPlaygroundProps = {
    size: 'small',
    selectedId: 'item1',
    onColor: false,
    rtl: false
  };

  playgroundConfig: PlaygroundConfig = {
    title: 'Content Switcher',
    description: 'Segmented navigation control for switching between related content views.',
    selector: 'dga-content-switcher',
    componentName: 'DgaContentSwitcher',
    textFields: [],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] },
      { key: 'selectedId', label: 'Selected item', type: 'select', options: ['item1', 'item2', 'item3', 'item4'] }
    ],
    booleanFields: [
      { key: 'onColor', label: 'On Color', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props as ContentSwitcherPlaygroundProps),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: ContentSwitcherPlaygroundProps): string {
    const attrs = [
      '[items]="items"',
      `size="${props.size}"`,
      `selectedId="${props.selectedId}"`,
      props.onColor ? '[onColor]="true"' : '',
      props.rtl ? '[rtl]="true"' : ''
    ].filter(Boolean);

    return [`<dga-content-switcher`, ...attrs.map((attr) => `  ${attr}`), `></dga-content-switcher>`].join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-content-switcher {
  display: inline-flex;
  align-items: center;
  border-radius: var(--dga-radius-md);
  font-family: var(--dga-font-text), sans-serif;
}

.dga-content-switcher__item {
  min-width: 51px;
  height: 32px;
  padding: 0 var(--dga-space-2);
  border: 1px solid var(--dga-border-neutral-primary);
  background: var(--dga-bg-neutral-100);
  color: var(--dga-text-default);
}

.dga-content-switcher__item--selected {
  border-color: var(--dga-neutral-950);
  background: var(--dga-neutral-950);
  color: var(--dga-text-on-color);
}
`;
  }
}

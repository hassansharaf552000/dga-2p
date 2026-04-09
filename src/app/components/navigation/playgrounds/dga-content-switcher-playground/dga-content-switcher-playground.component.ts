import { Component } from '@angular/core';
import { DgaContentSwitcherComponent } from '../../components/dga-content-switcher/dga-content-switcher.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type SwitcherSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'dga-content-switcher-playground',
  standalone: true,
  imports: [DgaContentSwitcherComponent, DgaPlaygroundComponent],
  templateUrl: './dga-content-switcher-playground.component.html',
  styleUrl: './dga-content-switcher-playground.component.scss'
})
export class DgaContentSwitcherPlaygroundComponent {
  componentProps = {
    size: 'small' as SwitcherSize,
    onColor: false,
    rtl: false,
    items: [
      { id: 'item1', label: 'Item', state: 'selected' },
      { id: 'item2', label: 'Item', state: 'normal' },
      { id: 'item3', label: 'Item', state: 'normal' },
      { id: 'item4', label: 'Item', state: 'normal' }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Content Switcher',
    description: 'Segmented content switcher with size and on-color variants.',
    selector: 'dga-content-switcher',
    componentName: 'DgaContentSwitcher',
    textFields: [],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] }
    ],
    booleanFields: [
      { key: 'onColor', label: 'On Color', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-content-switcher\n  [items]=\"items\"\n  size=\"${props.size}\"\n  [onColor]=\"${props.onColor}\"\n  [rtl]=\"${props.rtl}\">\n</dga-content-switcher>`,
    generateCss: () => this.generateCssSnippet()
  };

  generateCssSnippet(): string {
    return `.dga-content-switcher {\n  display: inline-flex;\n  align-items: center;\n  border-radius: var(--dga-radius-md);\n  font-family: var(--dga-font-text), sans-serif;\n}\n\n.dga-content-switcher__item {\n  border: 0.5px solid var(--dga-border-neutral-primary);\n  background: var(--dga-bg-neutral-100);\n  color: var(--dga-text-default);\n  padding: var(--dga-space-2);\n  height: 32px;\n  min-width: 51px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--dga-text-md-size);\n  line-height: var(--dga-text-md-line);\n  cursor: pointer;\n}\n\n.dga-content-switcher__item--first {\n  border-top-left-radius: var(--dga-radius-md);\n  border-bottom-left-radius: var(--dga-radius-md);\n}\n\n.dga-content-switcher__item--last {\n  border-top-right-radius: var(--dga-radius-md);\n  border-bottom-right-radius: var(--dga-radius-md);\n}\n\n.dga-content-switcher__item--selected {\n  background: #0d121c;\n  color: var(--dga-text-on-color);\n  border-color: #0d121c;\n}\n\n.dga-content-switcher__item--hovered {\n  background: #f3f4f6;\n}\n\n.dga-content-switcher__item--focused {\n  border: 2px solid #161616;\n  position: relative;\n}\n\n.dga-content-switcher__item--focused::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  border: 1px solid #ffffff;\n  pointer-events: none;\n}\n\n.dga-content-switcher--on-color .dga-content-switcher__item {\n  background: rgba(255, 255, 255, 0.2);\n  color: var(--dga-text-on-color);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n.dga-content-switcher--on-color .dga-content-switcher__item--selected {\n  background: var(--dga-bg-card);\n  color: var(--dga-text-default);\n}\n\n.dga-content-switcher--small .dga-content-switcher__item {\n  height: 32px;\n}\n\n.dga-content-switcher--medium .dga-content-switcher__item {\n  height: 40px;\n  min-width: 64px;\n}\n\n.dga-content-switcher--large .dga-content-switcher__item {\n  height: 48px;\n  min-width: 76px;\n}\n\n.dga-content-switcher[dir='rtl'] {\n  direction: rtl;\n}\n\n.dga-content-switcher[dir='rtl'] .dga-content-switcher__item--first {\n  border-radius: 0 var(--dga-radius-md) var(--dga-radius-md) 0;\n}\n\n.dga-content-switcher[dir='rtl'] .dga-content-switcher__item--last {\n  border-radius: var(--dga-radius-md) 0 0 var(--dga-radius-md);\n}\n`;
  }
}

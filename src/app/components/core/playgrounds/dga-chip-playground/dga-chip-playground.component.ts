import { Component } from '@angular/core';
import {
  ChipSize,
  ChipState,
  ChipVariant,
  DgaChipComponent
} from '../../components/dga-chip/dga-chip.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

interface ChipPlaygroundProps {
  label: string;
  variant: ChipVariant;
  size: ChipSize;
  state: ChipState;
  selected: boolean;
  rounded: boolean;
  rtl: boolean;
  onColor: boolean;
  leadIcon: boolean;
  trailIcon: boolean;
  removable: boolean;
  selectable: boolean;
  disabled: boolean;
}

@Component({
  selector: 'dga-chip-playground',
  standalone: true,
  imports: [DgaChipComponent, DgaPlaygroundComponent],
  templateUrl: './dga-chip-playground.component.html',
  styleUrl: './dga-chip-playground.component.scss'
})
export class DgaChipPlaygroundComponent {
  componentProps: ChipPlaygroundProps = {
    label: 'Item',
    variant: 'primary',
    size: 'small',
    state: 'default',
    selected: false,
    rounded: false,
    rtl: false,
    onColor: false,
    leadIcon: false,
    trailIcon: false,
    removable: false,
    selectable: false,
    disabled: false
  };

  playgroundConfig: PlaygroundConfig = {
    title: 'Chip',
    description: 'Compact interactive element for tags, filters, and selections.',
    selector: 'dga-chip',
    componentName: 'DgaChip',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['primary', 'neutral'] },
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] },
      {
        key: 'state',
        label: 'State',
        type: 'select',
        options: ['default', 'hovered', 'pressed', 'selected', 'focused', 'disabled']
      }
    ],
    booleanFields: [
      { key: 'selected', label: 'Selected', type: 'boolean' },
      { key: 'rounded', label: 'Rounded', type: 'boolean' },
      { key: 'leadIcon', label: 'Lead icon', type: 'boolean' },
      { key: 'trailIcon', label: 'Trail icon', type: 'boolean' },
      { key: 'removable', label: 'Removable', type: 'boolean' },
      { key: 'selectable', label: 'Selectable', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      { key: 'onColor', label: 'On color', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props as ChipPlaygroundProps),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: ChipPlaygroundProps): string {
    const attrs = [
      `label="${this.escapeAttribute(props.label)}"`,
      `variant="${props.variant}"`,
      `size="${props.size}"`,
      `state="${props.state}"`,
      props.selected ? '[selected]="true"' : '',
      props.rounded ? '[rounded]="true"' : '',
      props.leadIcon ? '[leadIcon]="true"' : '',
      props.trailIcon ? '[trailIcon]="true"' : '',
      props.removable ? '[removable]="true"' : '',
      props.selectable ? '[selectable]="true"' : '',
      props.rtl ? '[rtl]="true"' : '',
      props.onColor ? '[onColor]="true"' : '',
      props.disabled ? '[disabled]="true"' : ''
    ].filter(Boolean);

    return [`<dga-chip`, ...attrs.map((attr) => `  ${attr}`), `></dga-chip>`].join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--dga-space-1);
  min-height: 20px;
  padding: 0 var(--dga-space-3);
  border: 0;
  border-radius: var(--dga-radius-sm);
  background: var(--dga-bg-brand-light);
  color: var(--dga-text-brand-primary);
  font-family: var(--dga-font-text), sans-serif;
  font-size: var(--dga-text-2xs-size);
  font-weight: var(--dga-font-semibold);
}

.dga-chip--neutral {
  background: var(--dga-neutral-100);
  color: var(--dga-text-default);
}

.dga-chip--selected {
  background: var(--dga-600);
  color: var(--dga-text-on-color);
}

.dga-chip--rounded {
  border-radius: var(--dga-radius-full);
}
`;
  }

  private escapeAttribute(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

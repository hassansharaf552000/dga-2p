import { Component } from '@angular/core';
import {
  DgaDigitalStampComponent,
  DigitalStampLayout,
  DigitalStampSize,
  DigitalStampState,
  DigitalStampStyle,
  DigitalStampVariant
} from '../../components/dga-digital-stamp/dga-digital-stamp.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

interface DigitalStampPlaygroundProps {
  variant: DigitalStampVariant;
  size: DigitalStampSize;
  layout: DigitalStampLayout;
  stampStyle: DigitalStampStyle;
  state: DigitalStampState;
  title: string;
  text: string;
  organization: string;
  date: string;
  dateLabel: string;
  reference: string;
  referenceLabel: string;
  signature: string;
  signatureLabel: string;
  qrLabel: string;
  rotation: string;
  showIcon: boolean;
  showQr: boolean;
  showMeta: boolean;
  rtl: boolean;
  onColor: boolean;
  disabled: boolean;
}

@Component({
  selector: 'dga-digital-stamp-playground',
  standalone: true,
  imports: [DgaDigitalStampComponent, DgaPlaygroundComponent],
  templateUrl: './dga-digital-stamp-playground.component.html',
  styleUrl: './dga-digital-stamp-playground.component.scss'
})
export class DgaDigitalStampPlaygroundComponent {
  componentProps: DigitalStampPlaygroundProps = {
    variant: 'verified',
    size: 'medium',
    layout: 'horizontal',
    stampStyle: 'soft',
    state: 'default',
    title: 'Digital Stamp',
    text: '',
    organization: 'Digital Government Authority',
    date: '21 Apr 2026',
    dateLabel: 'Date',
    reference: 'DGA-2026-0421',
    referenceLabel: 'Reference',
    signature: 'Authorized service',
    signatureLabel: 'Signed by',
    qrLabel: 'Verification code',
    rotation: '0',
    showIcon: true,
    showQr: true,
    showMeta: true,
    rtl: false,
    onColor: false,
    disabled: false
  };

  playgroundConfig: PlaygroundConfig = {
    title: 'Digital Stamp',
    description: 'Official verification stamp for document status, references, dates, signatures, and QR verification.',
    selector: 'dga-digital-stamp',
    componentName: 'DgaDigitalStamp',
    textFields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'text', label: 'Status text', type: 'text' },
      { key: 'organization', label: 'Organization', type: 'text' },
      { key: 'reference', label: 'Reference', type: 'text' },
      { key: 'referenceLabel', label: 'Reference label', type: 'text' },
      { key: 'date', label: 'Date', type: 'text' },
      { key: 'dateLabel', label: 'Date label', type: 'text' },
      { key: 'signature', label: 'Signature', type: 'text' },
      { key: 'signatureLabel', label: 'Signature label', type: 'text' },
      { key: 'qrLabel', label: 'QR label', type: 'text' },
      { key: 'rotation', label: 'Rotation', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['verified', 'approved', 'rejected', 'pending', 'expired', 'custom'] },
      { key: 'stampStyle', label: 'Style', type: 'select', options: ['soft', 'outline', 'solid'] },
      { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] },
      { key: 'layout', label: 'Layout', type: 'select', options: ['horizontal', 'vertical', 'compact'] },
      { key: 'state', label: 'State', type: 'select', options: ['default', 'hovered', 'focused', 'disabled'] }
    ],
    booleanFields: [
      { key: 'showIcon', label: 'Show icon', type: 'boolean' },
      { key: 'showQr', label: 'Show QR', type: 'boolean' },
      { key: 'showMeta', label: 'Show metadata', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      { key: 'onColor', label: 'On color', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props as DigitalStampPlaygroundProps),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: DigitalStampPlaygroundProps): string {
    const attrs = [
      this.stringAttr('variant', props.variant),
      this.stringAttr('stampStyle', props.stampStyle),
      this.stringAttr('size', props.size),
      this.stringAttr('layout', props.layout),
      this.stringAttr('state', props.state),
      this.stringAttr('title', props.title),
      this.stringAttr('text', props.text),
      this.stringAttr('organization', props.organization),
      this.stringAttr('reference', props.reference),
      this.stringAttr('date', props.date),
      this.stringAttr('signature', props.signature),
      this.stringAttr('rotation', props.rotation),
      props.showIcon ? '' : '[showIcon]="false"',
      props.showQr ? '' : '[showQr]="false"',
      props.showMeta ? '' : '[showMeta]="false"',
      props.rtl ? '[rtl]="true"' : '',
      props.onColor ? '[onColor]="true"' : '',
      props.disabled ? '[disabled]="true"' : ''
    ].filter(Boolean);

    return [`<dga-digital-stamp`, ...attrs.map((attr) => `  ${attr}`), `></dga-digital-stamp>`].join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-digital-stamp {
  display: inline-grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--dga-space-3);
  padding: var(--dga-space-4);
  border: 1px solid var(--dga-success-600);
  border-radius: var(--dga-radius-md);
  background: var(--dga-success-50);
  color: var(--dga-success-800);
}

.dga-digital-stamp__status {
  font-size: var(--dga-text-lg-size);
  line-height: var(--dga-text-lg-line);
  text-transform: uppercase;
}
`;
  }

  private stringAttr(name: string, value: string): string {
    return value ? `${name}="${this.escapeAttribute(value)}"` : '';
  }

  private escapeAttribute(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

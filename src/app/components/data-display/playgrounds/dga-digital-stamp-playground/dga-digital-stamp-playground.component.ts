import { Component } from '@angular/core';
import {
  DgaDigitalStampComponent,
  DigitalStampDevice,
  DigitalStampExtension
} from '../../components/dga-digital-stamp/dga-digital-stamp.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

interface DigitalStampPlaygroundProps {
  opened: boolean;
  device: DigitalStampDevice;
  extension: DigitalStampExtension;
  message: string;
  linkLabel: string;
  registrationLabel: string;
  registrationNumber: string;
  registrationHref: string;
  rtl: boolean;
  disabled: boolean;
  showDomain: boolean;
  showSecurity: boolean;
  showRegistration: boolean;
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
    opened: true,
    device: 'desktop',
    extension: 'gov.sa',
    message: '',
    linkLabel: '',
    registrationLabel: '',
    registrationNumber: '20230103200',
    registrationHref: '',
    rtl: false,
    disabled: false,
    showDomain: true,
    showSecurity: true,
    showRegistration: true
  };

  playgroundConfig: PlaygroundConfig = {
    title: 'Digital Stamp',
    description: 'Trust banner for verified Saudi government websites, domain guidance, HTTPS confirmation, and DGA registration.',
    selector: 'dga-digital-stamp',
    componentName: 'DgaDigitalStamp',
    textFields: [
      { key: 'message', label: 'Banner message', type: 'text' },
      { key: 'linkLabel', label: 'Toggle label', type: 'text' },
      { key: 'registrationLabel', label: 'Registration label', type: 'text' },
      { key: 'registrationNumber', label: 'Registration number', type: 'text' },
      { key: 'registrationHref', label: 'Registration URL', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'device', label: 'Device', type: 'select', options: ['desktop', 'mobile'] },
      { key: 'extension', label: 'Extension', type: 'select', options: ['gov.sa', 'edu.sa', 'med.sa', 'org.sa', 'sch.sa', '.sa'] }
    ],
    booleanFields: [
      { key: 'opened', label: 'Opened', type: 'boolean' },
      { key: 'rtl', label: 'RTL', type: 'boolean' },
      { key: 'showDomain', label: 'Show domain proof', type: 'boolean' },
      { key: 'showSecurity', label: 'Show HTTPS proof', type: 'boolean' },
      { key: 'showRegistration', label: 'Show registration', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props as DigitalStampPlaygroundProps),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: DigitalStampPlaygroundProps): string {
    const attrs = [
      props.opened ? '[opened]="true"' : '',
      this.stringAttr('device', props.device),
      this.stringAttr('extension', props.extension),
      this.stringAttr('message', props.message),
      this.stringAttr('linkLabel', props.linkLabel),
      this.stringAttr('registrationLabel', props.registrationLabel),
      this.stringAttr('registrationNumber', props.registrationNumber),
      this.stringAttr('registrationHref', props.registrationHref),
      props.rtl ? '[rtl]="true"' : '',
      props.showDomain ? '' : '[showDomain]="false"',
      props.showSecurity ? '' : '[showSecurity]="false"',
      props.showRegistration ? '' : '[showRegistration]="false"',
      props.disabled ? '[disabled]="true"' : ''
    ].filter(Boolean);

    return [`<dga-digital-stamp`, ...attrs.map((attr) => `  ${attr}`), `></dga-digital-stamp>`].join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-digital-stamp {
  width: 100%;
  background: var(--dga-bg-neutral-100);
  color: var(--dga-text-default);
  font-family: var(--dga-font-text), sans-serif;
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

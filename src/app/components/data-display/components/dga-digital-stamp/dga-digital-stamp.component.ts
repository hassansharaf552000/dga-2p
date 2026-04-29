import { Component, EventEmitter, Input, Output } from '@angular/core';

export type DigitalStampDevice = 'desktop' | 'mobile';
export type DigitalStampExtension = 'gov.sa' | 'edu.sa' | 'med.sa' | 'org.sa' | 'sch.sa' | '.sa';

interface ExtensionCopy {
  enTitlePrefix: string;
  enDescription: string;
  arTitlePrefix: string;
  arDescription: string;
}

const EXTENSION_COPY: Record<DigitalStampExtension, ExtensionCopy> = {
  'gov.sa': {
    enTitlePrefix: 'Official Saudi Government websites URL ends with ',
    enDescription:
      'Website belongs to an official government organization in the Kingdom of Saudi Arabia always ends with {extension}.',
    arTitlePrefix: 'روابط المواقع الإلكترونية الرسمية الحكومية تنتهي بـ',
    arDescription:
      'جميع روابط المواقع الرسمية التابعة للجهات الحكومية في المملكة العربية السعودية تنتهي بـ {extension}'
  },
  'edu.sa': {
    enTitlePrefix: 'Official Saudi education websites URL ends with ',
    enDescription:
      'Website belongs to an official education organization in the Kingdom of Saudi Arabia always ends with {extension}.',
    arTitlePrefix: 'روابط المواقع الإلكترونية التعليمية الرسمية تنتهي بـ',
    arDescription:
      'جميع روابط المواقع الرسمية التابعة للجهات التعليمية في المملكة العربية السعودية تنتهي بـ {extension}'
  },
  'med.sa': {
    enTitlePrefix: 'Official Saudi health websites URL ends with ',
    enDescription:
      'Website belongs to an official health organization in the Kingdom of Saudi Arabia always ends with {extension}.',
    arTitlePrefix: 'روابط المواقع الإلكترونية الصحية الرسمية تنتهي بـ',
    arDescription:
      'جميع روابط المواقع الرسمية التابعة للجهات الصحية في المملكة العربية السعودية تنتهي بـ {extension}'
  },
  'org.sa': {
    enTitlePrefix: 'Official Saudi organization websites URL ends with ',
    enDescription:
      'Website belongs to an official organization in the Kingdom of Saudi Arabia always ends with {extension}.',
    arTitlePrefix: 'روابط المواقع الإلكترونية للمنظمات الرسمية تنتهي بـ',
    arDescription:
      'جميع روابط المواقع الرسمية التابعة للمنظمات في المملكة العربية السعودية تنتهي بـ {extension}'
  },
  'sch.sa': {
    enTitlePrefix: 'Official Saudi school websites URL ends with ',
    enDescription:
      'Website belongs to an official school in the Kingdom of Saudi Arabia always ends with {extension}.',
    arTitlePrefix: 'روابط المواقع الإلكترونية المدرسية الرسمية تنتهي بـ',
    arDescription:
      'جميع روابط المواقع الرسمية التابعة للمدارس في المملكة العربية السعودية تنتهي بـ {extension}'
  },
  '.sa': {
    enTitlePrefix: 'Official Saudi websites URL ends with ',
    enDescription:
      'Website belongs to an official Saudi organization and uses a verified Saudi domain ending with {extension}.',
    arTitlePrefix: 'روابط المواقع الإلكترونية السعودية الرسمية تنتهي بـ',
    arDescription: 'جميع روابط المواقع السعودية الرسمية تنتهي بـ {extension}'
  }
};

@Component({
  selector: 'dga-digital-stamp',
  standalone: true,
  imports: [],
  templateUrl: './dga-digital-stamp.component.html',
  styleUrls: [
    './dga-digital-stamp.component.scss',
    './dga-digital-stamp-details.component.scss',
    './dga-digital-stamp-variants.component.scss'
  ]
})
export class DgaDigitalStampComponent {
  private _extension: DigitalStampExtension = 'gov.sa';

  @Input() opened = false;
  @Input() device: DigitalStampDevice = 'desktop';
  @Input() rtl = false;
  @Input() disabled = false;

  @Input()
  set extension(value: DigitalStampExtension | string) {
    this._extension = this.normalizeExtension(value);
  }
  get extension(): DigitalStampExtension {
    return this._extension;
  }

  @Input() message = '';
  @Input() linkLabel = '';
  @Input() domainTitlePrefix = '';
  @Input() domainDescription = '';
  @Input() securityTitlePrefix = '';
  @Input() securityDescription = '';
  @Input() registrationLabel = '';
  @Input() registrationNumber = '20230103200';
  @Input() registrationHref = '';
  @Input() showRegistration = true;
  @Input() showSecurity = true;
  @Input() showDomain = true;

  @Output() openedChange = new EventEmitter<boolean>();

  @Input('isOpen')
  set isOpenAlias(value: boolean | null | undefined) {
    if (value !== null && value !== undefined) {
      this.opened = value;
    }
  }

  @Input('mobile')
  set mobileAlias(value: boolean | null | undefined) {
    if (value) {
      this.device = 'mobile';
    }
  }

  get stampClasses(): string[] {
    return [
      'dga-digital-stamp',
      `dga-digital-stamp--${this.device}`,
      this.opened ? 'dga-digital-stamp--opened' : 'dga-digital-stamp--closed',
      this.rtl ? 'dga-digital-stamp--rtl' : '',
      this.isDisabled ? 'dga-digital-stamp--disabled' : ''
    ].filter(Boolean);
  }

  get isDisabled(): boolean {
    return this.disabled;
  }

  get displayMessage(): string {
    if (this.message) {
      return this.message;
    }

    return this.rtl
      ? 'موقع حكومي مسجل لدى هيئة الحكومة الرقمية'
      : 'A government website registered with the Digital Government Authority.';
  }

  get displayLinkLabel(): string {
    if (this.linkLabel) {
      return this.linkLabel;
    }

    return this.rtl ? 'كيف تتحقق؟' : 'How you know?';
  }

  get domainPrefix(): string {
    if (this.domainTitlePrefix) {
      return this.domainTitlePrefix;
    }

    const copy = EXTENSION_COPY[this.extension];
    return this.rtl ? copy.arTitlePrefix : copy.enTitlePrefix;
  }

  get domainDescriptionText(): string {
    if (this.domainDescription) {
      return this.domainDescription;
    }

    const copy = EXTENSION_COPY[this.extension];
    const template = this.rtl ? copy.arDescription : copy.enDescription;
    return template.replace('{extension}', this.sentenceExtension);
  }

  get securityPrefix(): string {
    if (this.securityTitlePrefix) {
      return this.securityTitlePrefix;
    }

    return this.rtl
      ? 'المواقع الإلكترونية الحكومية الموثوقة تستخدم بروتوكول '
      : 'Official Reliable websites use ';
  }

  get securityDescriptionText(): string {
    if (this.securityDescription) {
      return this.securityDescription;
    }

    return this.rtl
      ? 'تحقق من أن الموقع يستخدم بروتوكول HTTPS'
      : 'Ensure the website is using the HTTPS protocol.';
  }

  get registrationLabelText(): string {
    if (this.registrationLabel) {
      return this.registrationLabel;
    }

    return this.rtl
      ? 'مسجل لدى هيئة الحكومة الرقمية برقم:'
      : 'Registered on Digital Government Authority:';
  }

  get headingExtension(): string {
    if (this.rtl && this.extension !== '.sa') {
      return this.extension;
    }

    return this.sentenceExtension;
  }

  get sentenceExtension(): string {
    return this.extension.startsWith('.') ? this.extension : `.${this.extension}`;
  }

  get computedAriaLabel(): string {
    return [this.displayMessage, this.displayLinkLabel, this.registrationNumber]
      .filter(Boolean)
      .join(', ');
  }

  toggleOpened(): void {
    if (this.isDisabled) {
      return;
    }

    this.opened = !this.opened;
    this.openedChange.emit(this.opened);
  }

  private normalizeExtension(value: DigitalStampExtension | string): DigitalStampExtension {
    const normalized = `${value || 'gov.sa'}`.trim().toLowerCase();

    if (normalized === '.sa') {
      return '.sa';
    }

    const withoutLeadingDot = normalized.replace(/^\./, '') as DigitalStampExtension;
    return withoutLeadingDot in EXTENSION_COPY ? withoutLeadingDot : 'gov.sa';
  }
}

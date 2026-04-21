import { Component, Input } from '@angular/core';

export type DigitalStampVariant = 'verified' | 'approved' | 'rejected' | 'pending' | 'expired' | 'custom';
export type DigitalStampSize = 'small' | 'medium' | 'large';
export type DigitalStampLayout = 'horizontal' | 'vertical' | 'compact';
export type DigitalStampStyle = 'soft' | 'outline' | 'solid';
export type DigitalStampState = 'default' | 'hovered' | 'focused' | 'disabled';

@Component({
  selector: 'dga-digital-stamp',
  standalone: true,
  imports: [],
  templateUrl: './dga-digital-stamp.component.html',
  styleUrls: ['./dga-digital-stamp.component.scss', './dga-digital-stamp-variants.component.scss']
})
export class DgaDigitalStampComponent {
  @Input() variant: DigitalStampVariant = 'verified';
  @Input() size: DigitalStampSize = 'medium';
  @Input() layout: DigitalStampLayout = 'horizontal';
  @Input() stampStyle: DigitalStampStyle = 'soft';
  @Input() state: DigitalStampState = 'default';
  @Input() title = 'Digital Stamp';
  @Input() text = '';
  @Input() organization = 'Digital Government Authority';
  @Input() date = '';
  @Input() dateLabel = 'Date';
  @Input() reference = '';
  @Input() referenceLabel = 'Reference';
  @Input() signature = '';
  @Input() signatureLabel = 'Signed by';
  @Input() qrLabel = 'Verification code';
  @Input() rotation: number | string = 0;
  @Input() rtl = false;
  @Input() onColor = false;
  @Input() showIcon = true;
  @Input() showQr = true;
  @Input() showMeta = true;
  @Input() disabled = false;

  readonly qrCells = Array.from({ length: 25 }, (_, index) => index);

  @Input('status')
  set statusAlias(value: DigitalStampVariant | null | undefined) {
    if (value) this.variant = value;
  }

  @Input('style')
  set styleAlias(value: DigitalStampStyle | null | undefined) {
    if (value) this.stampStyle = value;
  }

  get stampClasses(): string[] {
    const stateClass = this.isDisabled ? 'dga-digital-stamp--disabled' : `dga-digital-stamp--${this.state}`;

    return [
      'dga-digital-stamp',
      `dga-digital-stamp--${this.variant}`,
      `dga-digital-stamp--${this.size}`,
      `dga-digital-stamp--${this.layout}`,
      `dga-digital-stamp--${this.stampStyle}`,
      stateClass,
      this.onColor ? 'dga-digital-stamp--on-color' : '',
      this.rtl ? 'dga-digital-stamp--rtl' : ''
    ].filter(Boolean);
  }

  get isDisabled(): boolean {
    return this.disabled || this.state === 'disabled';
  }

  get displayText(): string {
    if (this.text) return this.text;

    return {
      verified: 'Verified',
      approved: 'Approved',
      rejected: 'Rejected',
      pending: 'Pending',
      expired: 'Expired',
      custom: 'Stamped'
    }[this.variant];
  }

  get hasMeta(): boolean {
    return this.showMeta && (!!this.date || !!this.reference || !!this.signature);
  }

  get rotationTransform(): string {
    const amount = Number(this.rotation);
    return Number.isFinite(amount) && amount !== 0 ? `rotate(${amount}deg)` : '';
  }

  get computedAriaLabel(): string {
    return [this.title, this.displayText, this.reference, this.date].filter(Boolean).join(', ');
  }

  isQrCellFilled(index: number): boolean {
    const seed = `${this.displayText}${this.reference}${this.date}`.length;
    return [0, 1, 2, 5, 10, 11, 12, 14, 17, 18, 20, 22, 24].includes(index) || (index + seed) % 4 === 0;
  }
}

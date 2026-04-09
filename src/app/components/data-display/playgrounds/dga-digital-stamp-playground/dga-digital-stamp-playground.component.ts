import { Component } from '@angular/core';
import { DgaDigitalStampComponent } from '../../components/dga-digital-stamp/dga-digital-stamp.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-digital-stamp-playground',
  standalone: true,
  imports: [DgaDigitalStampComponent, DgaPlaygroundComponent],
  templateUrl: './dga-digital-stamp-playground.component.html',
  styleUrl: './dga-digital-stamp-playground.component.scss'
})
export class DgaDigitalStampPlaygroundComponent {
  componentProps = {
    variant: 'approved',
    text: '',
    date: '2026-02-04',
    signature: 'John Doe',
    rotation: -15
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Digital Stamp',
    description: 'Official stamp for document status.',
    selector: 'dga-digital-stamp',
    componentName: 'DgaDigitalStamp',
    textFields: [
      { key: 'text', label: 'Text', type: 'text' },
      { key: 'date', label: 'Date', type: 'text' },
      { key: 'signature', label: 'Signature', type: 'text' },
      { key: 'rotation', label: 'Rotation (deg)', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['approved', 'rejected', 'pending', 'custom'] }
    ],
    booleanFields: [],
    generateHtml: (props) => `<dga-digital-stamp
  variant="${props.variant}"
  date="${props.date}"
  signature="${props.signature}">
</dga-digital-stamp>`,
    generateCss: () => ''
  };
}

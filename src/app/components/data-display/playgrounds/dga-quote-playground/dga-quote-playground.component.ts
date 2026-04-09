import { Component } from '@angular/core';
import { DgaQuoteComponent } from '../../components/dga-quote/dga-quote.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-quote-playground',
  standalone: true,
  imports: [DgaQuoteComponent, DgaPlaygroundComponent],
  templateUrl: './dga-quote-playground.component.html',
  styleUrl: './dga-quote-playground.component.scss'
})
export class DgaQuotePlaygroundComponent {
  componentProps = {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    source: 'Stanford Commencement Speech',
    variant: 'bordered'
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Quote',
    description: 'Blockquote for citations and testimonials.',
    selector: 'dga-quote',
    componentName: 'DgaQuote',
    textFields: [
      { key: 'author', label: 'Author', type: 'text' },
      { key: 'source', label: 'Source', type: 'text' }
    ],
    textareaFields: [
      { key: 'text', label: 'Quote Text', type: 'textarea' }
    ],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['default', 'bordered', 'filled'] }
    ],
    booleanFields: [],
    generateHtml: (props) => `<dga-quote
  text="${props.text}"
  author="${props.author}"
  variant="${props.variant}">
</dga-quote>`,
    generateCss: () => ''
  };
}

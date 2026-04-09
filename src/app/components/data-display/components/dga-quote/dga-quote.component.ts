import { Component, Input } from '@angular/core';

type QuoteVariant = 'default' | 'bordered' | 'filled';

@Component({
  selector: 'dga-quote',
  standalone: true,
  imports: [],
  templateUrl: './dga-quote.component.html',
  styleUrl: './dga-quote.component.scss'
})
export class DgaQuoteComponent {
  @Input() text = 'This is a quote text.';
  @Input() author = '';
  @Input() source = '';
  @Input() variant: QuoteVariant = 'bordered';
}

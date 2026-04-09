import { Component } from '@angular/core';
import { DgaSearchBoxComponent } from '../../components/dga-search-box/dga-search-box.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-search-box-playground',
  standalone: true,
  imports: [DgaSearchBoxComponent, DgaPlaygroundComponent],
  templateUrl: './dga-search-box-playground.component.html',
  styleUrl: './dga-search-box-playground.component.scss'
})
export class DgaSearchBoxPlaygroundComponent {
  componentProps = {
    placeholder: 'Search...',
    value: '',
    showClear: true,
    disabled: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Search Box',
    description: 'Text input optimized for search.',
    selector: 'dga-search-box',
    componentName: 'DgaSearchBox',
    textFields: [
      { key: 'placeholder', label: 'Placeholder', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'showClear', label: 'Show Clear', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-search-box
  placeholder="${props.placeholder}">
</dga-search-box>`,
    generateCss: () => ''
  };
}

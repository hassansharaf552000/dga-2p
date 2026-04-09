import { Component } from '@angular/core';
import { DgaUiShellTableOfContentComponent } from '../../components/dga-ui-shell-table-of-content/dga-ui-shell-table-of-content.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-ui-shell-table-of-content-playground',
  standalone: true,
  imports: [DgaUiShellTableOfContentComponent, DgaPlaygroundComponent],
  templateUrl: './dga-ui-shell-table-of-content-playground.component.html',
  styleUrl: './dga-ui-shell-table-of-content-playground.component.scss'
})
export class DgaUiShellTableOfContentPlaygroundComponent {
  componentProps = {
    title: 'On this page',
    showTitle: true,
    sticky: false,
    highlightActive: true,
    items: [
      { id: 'intro', label: 'Introduction', level: 1, active: true },
      { id: 'getting-started', label: 'Getting Started', level: 1 },
      { id: 'installation', label: 'Installation', level: 2 },
      { id: 'configuration', label: 'Configuration', level: 2 },
      { id: 'usage', label: 'Usage', level: 1 },
      { id: 'api', label: 'API Reference', level: 1 }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'UI Shell Table of Content',
    description: 'Table of contents navigation.',
    selector: 'dga-ui-shell-table-of-content',
    componentName: 'DgaUiShellTableOfContent',
    textFields: [
      { key: 'title', label: 'Title', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'showTitle', label: 'Show Title', type: 'boolean' },
      { key: 'sticky', label: 'Sticky', type: 'boolean' },
      { key: 'highlightActive', label: 'Highlight Active', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-ui-shell-table-of-content
  title="${props.title}"
  [showTitle]="${props.showTitle}"
  [items]="tocItems">
</dga-ui-shell-table-of-content>`,
    generateCss: () => ''
  };
}

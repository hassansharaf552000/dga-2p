import { Component, Input } from '@angular/core';

interface TocItem {
  id: string;
  label: string;
  level: number;
  active?: boolean;
}

@Component({
  selector: 'dga-ui-shell-table-of-content',
  standalone: true,
  imports: [],
  templateUrl: './dga-ui-shell-table-of-content.component.html',
  styleUrl: './dga-ui-shell-table-of-content.component.scss'
})
export class DgaUiShellTableOfContentComponent {
  @Input() items: readonly TocItem[] = [
    { id: 'intro', label: 'Introduction', level: 1, active: true },
    { id: 'getting-started', label: 'Getting Started', level: 1 },
    { id: 'installation', label: 'Installation', level: 2 },
    { id: 'configuration', label: 'Configuration', level: 2 },
    { id: 'usage', label: 'Usage', level: 1 },
    { id: 'examples', label: 'Examples', level: 2 },
    { id: 'api', label: 'API Reference', level: 1 }
  ];
  @Input() title = 'On this page';
  @Input() showTitle = true;
  @Input() sticky = true;
  @Input() highlightActive = true;
}

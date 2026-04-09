import { Component } from '@angular/core';
import { DgaUiShellSecondLevelNavHeaderComponent } from '../../components/dga-ui-shell-second-level-nav-header/dga-ui-shell-second-level-nav-header.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-ui-shell-second-level-nav-header-playground',
  standalone: true,
  imports: [DgaUiShellSecondLevelNavHeaderComponent, DgaPlaygroundComponent],
  templateUrl: './dga-ui-shell-second-level-nav-header-playground.component.html',
  styleUrl: './dga-ui-shell-second-level-nav-header-playground.component.scss'
})
export class DgaUiShellSecondLevelNavHeaderPlaygroundComponent {
  componentProps = {
    variant: 'default',
    sticky: false,
    showBorder: true,
    items: [
      { id: '1', label: 'Overview', active: true },
      { id: '2', label: 'Analytics' },
      { id: '3', label: 'Reports' },
      { id: '4', label: 'Settings' }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'UI Shell Second Level Nav Header',
    description: 'Secondary navigation header.',
    selector: 'dga-ui-shell-second-level-nav-header',
    componentName: 'DgaUiShellSecondLevelNavHeader',
    textFields: [],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['default', 'underline', 'pills'] }
    ],
    booleanFields: [
      { key: 'sticky', label: 'Sticky', type: 'boolean' },
      { key: 'showBorder', label: 'Show Border', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-ui-shell-second-level-nav-header
  variant="${props.variant}"
  [items]="navItems">
</dga-ui-shell-second-level-nav-header>`,
    generateCss: () => ''
  };
}

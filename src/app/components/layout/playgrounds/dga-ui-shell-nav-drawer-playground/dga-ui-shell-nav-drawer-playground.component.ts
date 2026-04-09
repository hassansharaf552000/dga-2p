import { Component } from '@angular/core';
import { DgaUiShellNavDrawerComponent } from '../../components/dga-ui-shell-nav-drawer/dga-ui-shell-nav-drawer.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-ui-shell-nav-drawer-playground',
  standalone: true,
  imports: [DgaUiShellNavDrawerComponent, DgaPlaygroundComponent],
  templateUrl: './dga-ui-shell-nav-drawer-playground.component.html',
  styleUrl: './dga-ui-shell-nav-drawer-playground.component.scss'
})
export class DgaUiShellNavDrawerPlaygroundComponent {
  componentProps = {
    collapsed: false,
    variant: 'light',
    width: 260,
    showFooter: true,
    items: [
      { id: '1', label: 'Dashboard', icon: '🏠' },
      { id: '2', label: 'Analytics', icon: '📊' },
      { id: '3', label: 'Users', icon: '👥', expanded: true, children: [
        { id: '3a', label: 'All Users' },
        { id: '3b', label: 'Add User' }
      ]},
      { id: '4', label: 'Settings', icon: '⚙️' }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'UI Shell Nav Drawer',
    description: 'Side navigation drawer.',
    selector: 'dga-ui-shell-nav-drawer',
    componentName: 'DgaUiShellNavDrawer',
    textFields: [
      { key: 'width', label: 'Width (px)', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['light', 'dark'] }
    ],
    booleanFields: [
      { key: 'collapsed', label: 'Collapsed', type: 'boolean' },
      { key: 'showFooter', label: 'Show Footer', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-ui-shell-nav-drawer
  variant="${props.variant}"
  [collapsed]="${props.collapsed}"
  [items]="navItems">
</dga-ui-shell-nav-drawer>`,
    generateCss: () => ''
  };
}

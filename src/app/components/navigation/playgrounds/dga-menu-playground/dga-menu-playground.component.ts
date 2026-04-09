import { Component } from '@angular/core';
import { DgaMenuComponent } from '../../components/dga-menu/dga-menu.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-menu-playground',
  standalone: true,
  imports: [DgaMenuComponent, DgaPlaygroundComponent],
  templateUrl: './dga-menu-playground.component.html',
  styleUrl: './dga-menu-playground.component.scss'
})
export class DgaMenuPlaygroundComponent {
  componentProps = {
    variant: 'vertical',
    compact: false,
    showIcons: true,
    items: [
      { id: '1', label: 'Dashboard', icon: '🏠' },
      { id: '2', label: 'Profile', icon: '👤' },
      { id: '3', label: 'Settings', icon: '⚙️' },
      { id: '4', label: '', divider: true },
      { id: '5', label: 'Help', icon: '❓' },
      { id: '6', label: 'Logout', icon: '🚪' }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Menu',
    description: 'Navigation menu component.',
    selector: 'dga-menu',
    componentName: 'DgaMenu',
    textFields: [],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['vertical', 'horizontal'] }
    ],
    booleanFields: [
      { key: 'compact', label: 'Compact', type: 'boolean' },
      { key: 'showIcons', label: 'Show Icons', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-menu
  variant="${props.variant}"
  [items]="menuItems">
</dga-menu>`,
    generateCss: () => ''
  };
}

import { Component } from '@angular/core';
import { DgaUiShellNavHeaderComponent } from '../../components/dga-ui-shell-nav-header/dga-ui-shell-nav-header.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-ui-shell-nav-header-playground',
  standalone: true,
  imports: [DgaUiShellNavHeaderComponent, DgaPlaygroundComponent],
  templateUrl: './dga-ui-shell-nav-header-playground.component.html',
  styleUrl: './dga-ui-shell-nav-header-playground.component.scss'
})
export class DgaUiShellNavHeaderPlaygroundComponent {
  componentProps = {
    logo: 'MyApp',
    variant: 'light',
    showSearch: true,
    showUserMenu: true,
    sticky: false,
    navItems: [
      { id: '1', label: 'Home', url: '/' },
      { id: '2', label: 'Products', url: '/products' },
      { id: '3', label: 'Services', url: '/services' },
      { id: '4', label: 'About', url: '/about' }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'UI Shell Nav Header',
    description: 'Main navigation header component.',
    selector: 'dga-ui-shell-nav-header',
    componentName: 'DgaUiShellNavHeader',
    textFields: [
      { key: 'logo', label: 'Logo Text', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['light', 'dark'] }
    ],
    booleanFields: [
      { key: 'showSearch', label: 'Show Search', type: 'boolean' },
      { key: 'showUserMenu', label: 'Show User Menu', type: 'boolean' },
      { key: 'sticky', label: 'Sticky', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-ui-shell-nav-header
  logo="${props.logo}"
  variant="${props.variant}"
  [navItems]="navItems">
</dga-ui-shell-nav-header>`,
    generateCss: () => ''
  };
}

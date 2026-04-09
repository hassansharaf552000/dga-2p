import { Component, Input } from '@angular/core';

interface NavItem {
  id: string;
  label: string;
  url?: string;
  icon?: string;
}

@Component({
  selector: 'dga-ui-shell-nav-header',
  standalone: true,
  imports: [],
  templateUrl: './dga-ui-shell-nav-header.component.html',
  styleUrl: './dga-ui-shell-nav-header.component.scss'
})
export class DgaUiShellNavHeaderComponent {
  @Input() logo = 'Logo';
  @Input() logoUrl = '/';
  @Input() navItems: readonly NavItem[] = [
    { id: '1', label: 'Home', url: '/' },
    { id: '2', label: 'Products', url: '/products' },
    { id: '3', label: 'Services', url: '/services' },
    { id: '4', label: 'About', url: '/about' }
  ];
  @Input() showSearch = true;
  @Input() showUserMenu = true;
  @Input() sticky = false;
  @Input() variant: 'light' | 'dark' = 'light';
}

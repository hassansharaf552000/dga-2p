import { Component, Input } from '@angular/core';

interface DrawerNavItem {
  id: string;
  label: string;
  icon?: string;
  url?: string;
  children?: readonly DrawerNavItem[];
  expanded?: boolean;
}

@Component({
  selector: 'dga-ui-shell-nav-drawer',
  standalone: true,
  imports: [],
  templateUrl: './dga-ui-shell-nav-drawer.component.html',
  styleUrl: './dga-ui-shell-nav-drawer.component.scss'
})
export class DgaUiShellNavDrawerComponent {
  @Input() items: readonly DrawerNavItem[] = [
    { id: '1', label: 'Dashboard', icon: '🏠' },
    { id: '2', label: 'Analytics', icon: '📊' },
    { id: '3', label: 'Users', icon: '👥', children: [
      { id: '3a', label: 'All Users' },
      { id: '3b', label: 'Add User' },
      { id: '3c', label: 'Roles' }
    ]},
    { id: '4', label: 'Settings', icon: '⚙️' }
  ];
  @Input() collapsed = false;
  @Input() variant: 'light' | 'dark' = 'light';
  @Input() width = 260;
  @Input() showFooter = true;
}

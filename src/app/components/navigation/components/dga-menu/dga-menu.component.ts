import { Component, Input } from '@angular/core';

interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'dga-menu',
  standalone: true,
  imports: [],
  templateUrl: './dga-menu.component.html',
  styleUrl: './dga-menu.component.scss'
})
export class DgaMenuComponent {
  @Input() items: readonly MenuItem[] = [
    { id: '1', label: 'Dashboard', icon: '🏠' },
    { id: '2', label: 'Profile', icon: '👤' },
    { id: '3', label: 'Settings', icon: '⚙️' },
    { id: '4', label: '', divider: true },
    { id: '5', label: 'Help', icon: '❓' },
    { id: '6', label: 'Logout', icon: '🚪', disabled: false }
  ];
  @Input() variant: 'vertical' | 'horizontal' = 'vertical';
  @Input() compact = false;
  @Input() showIcons = true;
}

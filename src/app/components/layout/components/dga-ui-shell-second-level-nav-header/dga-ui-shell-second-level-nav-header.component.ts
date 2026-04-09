import { Component, Input } from '@angular/core';

interface SecondLevelNavItem {
  id: string;
  label: string;
  url?: string;
  active?: boolean;
}

@Component({
  selector: 'dga-ui-shell-second-level-nav-header',
  standalone: true,
  imports: [],
  templateUrl: './dga-ui-shell-second-level-nav-header.component.html',
  styleUrl: './dga-ui-shell-second-level-nav-header.component.scss'
})
export class DgaUiShellSecondLevelNavHeaderComponent {
  @Input() items: readonly SecondLevelNavItem[] = [
    { id: '1', label: 'Overview', active: true },
    { id: '2', label: 'Analytics' },
    { id: '3', label: 'Reports' },
    { id: '4', label: 'Settings' },
    { id: '5', label: 'Integrations' }
  ];
  @Input() variant: 'default' | 'underline' | 'pills' = 'default';
  @Input() sticky = false;
  @Input() showBorder = true;
}

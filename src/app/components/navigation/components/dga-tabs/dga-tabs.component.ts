import { Component, Input } from '@angular/core';

type TabsVariant = 'default' | 'pills' | 'underline';
type TabsOrientation = 'horizontal' | 'vertical';

interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: string;
}

@Component({
  selector: 'dga-tabs',
  standalone: true,
  imports: [],
  templateUrl: './dga-tabs.component.html',
  styleUrl: './dga-tabs.component.scss'
})
export class DgaTabsComponent {
  @Input() tabs: readonly TabItem[] = [
    { id: 'tab1', label: 'Tab 1' },
    { id: 'tab2', label: 'Tab 2' },
    { id: 'tab3', label: 'Tab 3' },
    { id: 'tab4', label: 'Tab 4', disabled: true }
  ];
  @Input() activeTab = 'tab1';
  @Input() variant: TabsVariant = 'default';
  @Input() orientation: TabsOrientation = 'horizontal';
  @Input() fullWidth = false;
}

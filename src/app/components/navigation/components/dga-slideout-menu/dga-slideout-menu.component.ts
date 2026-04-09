import { Component, Input } from '@angular/core';

interface SlideoutMenuItem {
  id: string;
  label: string;
  icon?: string;
  children?: readonly SlideoutMenuItem[];
}

@Component({
  selector: 'dga-slideout-menu',
  standalone: true,
  imports: [],
  templateUrl: './dga-slideout-menu.component.html',
  styleUrl: './dga-slideout-menu.component.scss'
})
export class DgaSlideoutMenuComponent {
  @Input() items: readonly SlideoutMenuItem[] = [
    { id: '1', label: 'Home', icon: '🏠' },
    { id: '2', label: 'About', icon: '📄' },
    { id: '3', label: 'Services', icon: '💼', children: [
      { id: '3a', label: 'Consulting' },
      { id: '3b', label: 'Development' },
      { id: '3c', label: 'Support' }
    ]},
    { id: '4', label: 'Contact', icon: '📧' }
  ];
  @Input() position: 'left' | 'right' = 'left';
  @Input() isOpen = true;
  @Input() showOverlay = true;
  @Input() width = 280;
}

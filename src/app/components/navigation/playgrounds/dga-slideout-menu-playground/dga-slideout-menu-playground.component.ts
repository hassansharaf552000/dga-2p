import { Component } from '@angular/core';
import { DgaSlideoutMenuComponent } from '../../components/dga-slideout-menu/dga-slideout-menu.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-slideout-menu-playground',
  standalone: true,
  imports: [DgaSlideoutMenuComponent, DgaPlaygroundComponent],
  templateUrl: './dga-slideout-menu-playground.component.html',
  styleUrl: './dga-slideout-menu-playground.component.scss'
})
export class DgaSlideoutMenuPlaygroundComponent {
  componentProps = {
    position: 'left',
    isOpen: true,
    showOverlay: false,
    width: 280,
    items: [
      { id: '1', label: 'Home', icon: '🏠' },
      { id: '2', label: 'About', icon: '📄' },
      { id: '3', label: 'Services', icon: '💼', children: [
        { id: '3a', label: 'Consulting' },
        { id: '3b', label: 'Development' }
      ]},
      { id: '4', label: 'Contact', icon: '📧' }
    ]
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Slideout Menu',
    description: 'Sliding navigation drawer.',
    selector: 'dga-slideout-menu',
    componentName: 'DgaSlideoutMenu',
    textFields: [
      { key: 'width', label: 'Width (px)', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'position', label: 'Position', type: 'select', options: ['left', 'right'] }
    ],
    booleanFields: [
      { key: 'isOpen', label: 'Is Open', type: 'boolean' },
      { key: 'showOverlay', label: 'Show Overlay', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-slideout-menu
  position="${props.position}"
  [isOpen]="true"
  [items]="menuItems">
</dga-slideout-menu>`,
    generateCss: () => ''
  };
}

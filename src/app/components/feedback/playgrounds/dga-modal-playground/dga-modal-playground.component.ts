import { Component } from '@angular/core';
import { DgaModalComponent } from '../../components/dga-modal/dga-modal.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-modal-playground',
  standalone: true,
  imports: [DgaModalComponent, DgaPlaygroundComponent],
  templateUrl: './dga-modal-playground.component.html',
  styleUrl: './dga-modal-playground.component.scss'
})
export class DgaModalPlaygroundComponent {
  componentProps = {
    title: 'Confirm Action',
    size: 'md',
    showHeader: true,
    showFooter: true,
    showClose: true,
    primaryAction: 'Confirm',
    secondaryAction: 'Cancel'
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Modal',
    description: 'Dialog overlay component.',
    selector: 'dga-modal',
    componentName: 'DgaModal',
    textFields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'primaryAction', label: 'Primary Action', type: 'text' },
      { key: 'secondaryAction', label: 'Secondary Action', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'size', label: 'Size', type: 'select', options: ['sm', 'md', 'lg', 'xl', 'fullscreen'] }
    ],
    booleanFields: [
      { key: 'showHeader', label: 'Show Header', type: 'boolean' },
      { key: 'showFooter', label: 'Show Footer', type: 'boolean' },
      { key: 'showClose', label: 'Show Close', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-modal
  title="${props.title}"
  size="${props.size}"
  primaryAction="${props.primaryAction}">
  Modal content here
</dga-modal>`,
    generateCss: () => ''
  };
}

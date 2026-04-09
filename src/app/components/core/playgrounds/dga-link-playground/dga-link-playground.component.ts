import { Component } from '@angular/core';
import { DgaLinkComponent } from '../../components/dga-link/dga-link.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-link-playground',
  standalone: true,
  imports: [DgaLinkComponent, DgaPlaygroundComponent],
  templateUrl: './dga-link-playground.component.html',
  styleUrl: './dga-link-playground.component.scss'
})
export class DgaLinkPlaygroundComponent {
  componentProps = {
    href: '#',
    label: 'Link',
    variant: 'default',
    external: false,
    disabled: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Link',
    description: 'Styled anchor links for navigation.',
    selector: 'dga-link',
    componentName: 'DgaLink',
    textFields: [
      { key: 'href', label: 'URL', type: 'text' },
      { key: 'label', label: 'Label', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'variant', label: 'Variant', type: 'select', options: ['default', 'subtle', 'prominent'] }
    ],
    booleanFields: [
      { key: 'external', label: 'External', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-link
  href="${props.href}"
  label="${props.label}"
  variant="${props.variant}"
  [external]="${props.external}">
</dga-link>`,
    generateCss: () => ''
  };
}

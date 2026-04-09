import { Component } from '@angular/core';
import { DgaFileUploadComponent } from '../../components/dga-file-upload/dga-file-upload.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

@Component({
  selector: 'dga-file-upload-playground',
  standalone: true,
  imports: [DgaFileUploadComponent, DgaPlaygroundComponent],
  templateUrl: './dga-file-upload-playground.component.html',
  styleUrl: './dga-file-upload-playground.component.scss'
})
export class DgaFileUploadPlaygroundComponent {
  componentProps = {
    label: 'Upload file',
    accept: '*',
    multiple: false,
    dragDrop: true,
    disabled: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'File Upload',
    description: 'File input with drag and drop support.',
    selector: 'dga-file-upload',
    componentName: 'DgaFileUpload',
    textFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'accept', label: 'Accept', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [],
    booleanFields: [
      { key: 'multiple', label: 'Multiple', type: 'boolean' },
      { key: 'dragDrop', label: 'Drag & Drop', type: 'boolean' },
      { key: 'disabled', label: 'Disabled', type: 'boolean' }
    ],
    generateHtml: (props) => `<dga-file-upload
  label="${props.label}"
  [dragDrop]="${props.dragDrop}">
</dga-file-upload>`,
    generateCss: () => ''
  };
}

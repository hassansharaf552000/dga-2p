import { Component, Input } from '@angular/core';

@Component({
  selector: 'dga-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './dga-file-upload.component.html',
  styleUrl: './dga-file-upload.component.scss'
})
export class DgaFileUploadComponent {
  @Input() label = 'Upload file';
  @Input() accept = '*';
  @Input() multiple = false;
  @Input() dragDrop = true;
  @Input() disabled = false;
  @Input() maxSize = 0; // MB, 0 = no limit
}

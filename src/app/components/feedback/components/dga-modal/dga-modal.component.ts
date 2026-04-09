import { Component, Input } from '@angular/core';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';

@Component({
  selector: 'dga-modal',
  standalone: true,
  imports: [],
  templateUrl: './dga-modal.component.html',
  styleUrl: './dga-modal.component.scss'
})
export class DgaModalComponent {
  @Input() title = 'Modal Title';
  @Input() size: ModalSize = 'md';
  @Input() showHeader = true;
  @Input() showFooter = true;
  @Input() showClose = true;
  @Input() closeOnBackdrop = true;
  @Input() primaryAction = 'Confirm';
  @Input() secondaryAction = 'Cancel';
}

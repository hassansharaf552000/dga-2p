import { Component, Input } from '@angular/core';

type CarouselStyle = 'dots' | 'arrows' | 'dots-only';

@Component({
  selector: 'dga-carousel',
  standalone: true,
  imports: [],
  templateUrl: './dga-carousel.component.html',
  styleUrl: './dga-carousel.component.scss'
})
export class DgaCarouselComponent {
  @Input() style: CarouselStyle = 'dots';
  @Input() rtl = false;
  @Input() total = 4;
  @Input() current = 0;

  readonly dotActive = 'https://www.figma.com/api/mcp/asset/8043cd76-83e6-4d16-b150-fbac3aae3bdb';
  readonly dotInactive = 'https://www.figma.com/api/mcp/asset/c3918d20-3146-480a-8225-d722563d839b';
  readonly dotActiveSmall = 'https://www.figma.com/api/mcp/asset/55f1e480-e585-48e3-8d77-6bf0ff11b914';
  readonly dotInactiveSmall = 'https://www.figma.com/api/mcp/asset/6b0eaf67-a572-4ef5-ab3e-8cfaabcbbed1';
  readonly arrowRight = 'https://www.figma.com/api/mcp/asset/9ece3b09-35bc-4ea9-8b00-da5d25432f2e';
  readonly arrowLeft = 'https://www.figma.com/api/mcp/asset/461b5da1-f41b-452b-91c7-69943485c94e';

  get dots(): number[] {
    return Array.from({ length: this.total }, (_, i) => i);
  }

  get contentText(): string {
    return 'SWAP WITH CONTENT COMPONENT';
  }
}

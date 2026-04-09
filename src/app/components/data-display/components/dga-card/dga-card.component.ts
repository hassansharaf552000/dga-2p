import { Component, Input } from '@angular/core';

type CardEffect = 'shadow' | 'none' | 'stroke';
type CardState = 'default' | 'hover' | 'focused' | 'disabled';

@Component({
  selector: 'dga-card',
  standalone: true,
  imports: [],
  templateUrl: './dga-card.component.html',
  styleUrl: './dga-card.component.scss'
})
export class DgaCardComponent {
  @Input() title = 'Card Title';
  @Input() description = 'Card content placeholder text goes here';

  @Input() showImage = false;
  @Input() showFeaturedIcon = true;
  @Input() showTags = false;
  @Input() showRating = false;
  @Input() showPrimaryAction = true;
  @Input() showSecondaryAction = true;
  @Input() disabled = false;

  @Input() effect: CardEffect = 'shadow';
  @Input() state: CardState = 'default';
  @Input() rtl = false;

  protected readonly imageUrl =
    'https://www.figma.com/api/mcp/asset/e162f47d-bf90-4ee0-ae7b-a4ea96e341e1';
  protected readonly featuredIconUrl =
    'https://www.figma.com/api/mcp/asset/e4ce3402-c7a9-4d4d-a135-923d31b89aa5';
  protected readonly starFullUrl =
    'https://www.figma.com/api/mcp/asset/2d8f12b5-8e85-48d0-aa36-6d0b1ef07704';

  protected readonly tags = ['Label', 'Label', 'Label'];
  protected readonly stars = Array.from({ length: 5 }, (_, i) => i);

  get cardClasses(): string[] {
    return [
      'card',
      `card--${this.effect}`,
      `card--${this.state}`,
      this.rtl ? 'card--rtl' : ''
    ].filter(Boolean);
  }
}
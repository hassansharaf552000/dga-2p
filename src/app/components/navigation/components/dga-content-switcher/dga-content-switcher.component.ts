import { Component, Input } from '@angular/core';

type SwitcherSize = 'small' | 'medium' | 'large';
type SwitcherState = 'normal' | 'hovered' | 'selected' | 'focused';

type SwitcherItem = {
  id: string;
  label: string;
  state?: SwitcherState;
};

@Component({
  selector: 'dga-content-switcher',
  standalone: true,
  imports: [],
  templateUrl: './dga-content-switcher.component.html',
  styleUrl: './dga-content-switcher.component.scss'
})
export class DgaContentSwitcherComponent {
  @Input() items: readonly SwitcherItem[] = [
    { id: 'item1', label: 'Item', state: 'selected' },
    { id: 'item2', label: 'Item' },
    { id: 'item3', label: 'Item' },
    { id: 'item4', label: 'Item' }
  ];
  @Input() size: SwitcherSize = 'small';
  @Input() onColor = false;
  @Input() rtl = false;

  get isRtl(): boolean {
    return this.rtl;
  }
}

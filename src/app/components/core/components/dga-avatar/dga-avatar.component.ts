import { Component, Input } from '@angular/core';

type AvatarSize = '24' | '32' | '40' | '48' | '64' | '80' | '120';
type AvatarShape = 'circle' | 'square';
type AvatarType = 'image' | 'icon' | 'initials';

@Component({
  selector: 'dga-avatar',
  standalone: true,
  imports: [],
  templateUrl: './dga-avatar.component.html',
  styleUrl: './dga-avatar.component.scss'
})
export class DgaAvatarComponent {
  @Input() type: AvatarType = 'image';
  @Input() src = 'https://www.figma.com/api/mcp/asset/aaac1ade-eaae-4706-a721-b03aea9caf0c';
  @Input() alt = 'Avatar';
  @Input() initials = 'AB';
  @Input() size: AvatarSize = '40';
  @Input() shape: AvatarShape = 'circle';
  @Input() border = false;

  readonly iconUrl = 'https://www.figma.com/api/mcp/asset/ab6d8a36-c099-4e07-bb1f-a4b021650765';

  get avatarClasses(): string[] {
    return [
      'dga-avatar',
      `dga-avatar--${this.size}`,
      `dga-avatar--${this.shape}`
    ].filter(Boolean);
  }
}

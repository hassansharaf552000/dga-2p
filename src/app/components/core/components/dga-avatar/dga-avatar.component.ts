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
  @Input() src = 'assets/icons/user.svg';
  @Input() alt = 'Avatar';
  @Input() initials = 'AB';
  @Input() size: AvatarSize = '40';
  @Input() shape: AvatarShape = 'circle';
  @Input() border = false;

  readonly iconUrl = 'assets/icons/user.svg';

  get avatarClasses(): string[] {
    return [
      'dga-avatar',
      `dga-avatar--${this.size}`,
      `dga-avatar--${this.shape}`,
      `dga-avatar--${this.type}`
    ].filter(Boolean);
  }
}

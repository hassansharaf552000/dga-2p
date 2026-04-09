import { Component } from '@angular/core';
import { DgaAvatarComponent } from '../../components/dga-avatar/dga-avatar.component';
import { DgaPlaygroundComponent, PlaygroundConfig } from '../../../shared/dga-playground/dga-playground.component';

type AvatarSize = '24' | '32' | '40' | '48' | '64' | '80' | '120';
type AvatarShape = 'circle' | 'square';
type AvatarType = 'image' | 'icon' | 'initials';

@Component({
  selector: 'dga-avatar-playground',
  standalone: true,
  imports: [DgaAvatarComponent, DgaPlaygroundComponent],
  templateUrl: './dga-avatar-playground.component.html',
  styleUrl: './dga-avatar-playground.component.scss'
})
export class DgaAvatarPlaygroundComponent {
  readonly imageUrl = 'https://www.figma.com/api/mcp/asset/aaac1ade-eaae-4706-a721-b03aea9caf0c';
  readonly iconUrl = 'https://www.figma.com/api/mcp/asset/ab6d8a36-c099-4e07-bb1f-a4b021650765';

  componentProps = {
    type: 'image' as AvatarType,
    src: this.imageUrl,
    alt: 'Avatar',
    initials: 'AB',
    size: '40' as AvatarSize,
    shape: 'circle' as AvatarShape,
    border: false
  } as const;

  playgroundConfig: PlaygroundConfig = {
    title: 'Avatar',
    description: 'User avatar with image, icon, or initials variants.',
    selector: 'dga-avatar',
    componentName: 'DgaAvatar',
    textFields: [
      { key: 'src', label: 'Image URL', type: 'text' },
      { key: 'initials', label: 'Initials', type: 'text' }
    ],
    textareaFields: [],
    selectFields: [
      { key: 'type', label: 'Type', type: 'select', options: ['image', 'icon', 'initials'] },
      { key: 'size', label: 'Size', type: 'select', options: ['24', '32', '40', '48', '64', '80', '120'] },
      { key: 'shape', label: 'Shape', type: 'select', options: ['circle', 'square'] }
    ],
    booleanFields: [
      { key: 'border', label: 'Border ring', type: 'boolean' }
    ],
    generateHtml: (props) => this.generateHtmlSnippet(props),
    generateCss: () => this.generateCssSnippet()
  };

  generateHtmlSnippet(props: any): string {
    const classes = ['dga-avatar', `dga-avatar--${props.size}`, `dga-avatar--${props.shape}`];
    const lines: string[] = [];
    lines.push(`<div class="${classes.join(' ')}" aria-label="${props.alt}">`);
    lines.push('  <div class="dga-avatar__frame">');
    if (props.type === 'image') {
      const src = props.src || this.imageUrl;
      lines.push(`    <img class="dga-avatar__image" src="${src}" alt="${props.alt}" />`);
    } else if (props.type === 'icon') {
      lines.push('    <span class="dga-avatar__icon" aria-hidden="true">');
      lines.push(`      <img src="${this.iconUrl}" alt="" />`);
      lines.push('    </span>');
    } else {
      lines.push(`    <span class="dga-avatar__initials">${props.initials}</span>`);
    }
    lines.push('  </div>');
    if (props.border) {
      lines.push('  <span class="dga-avatar__ring" aria-hidden="true"></span>');
    }
    lines.push('</div>');
    return lines.join('\n');
  }

  generateCssSnippet(): string {
    return `.dga-avatar {
  --dga-avatar-size: 40px;
  --dga-avatar-radius: var(--dga-radius-full);
  --dga-avatar-font-size: var(--dga-text-sm-size);
  --dga-avatar-line-height: var(--dga-text-sm-line);

  position: relative;
  width: var(--dga-avatar-size);
  height: var(--dga-avatar-size);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--dga-font-text), sans-serif;
}

.dga-avatar__frame {
  width: 100%;
  height: 100%;
  border-radius: var(--dga-avatar-radius);
  background: var(--dga-bg-neutral-100);
  border: 2px solid var(--dga-bg-card);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.dga-avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--dga-avatar-radius);
}

.dga-avatar__icon {
  width: 80%;
  height: 80%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.dga-avatar__icon img {
  width: 100%;
  height: 100%;
  display: block;
}

.dga-avatar__initials {
  font-weight: var(--dga-font-semibold);
  font-size: var(--dga-avatar-font-size);
  line-height: var(--dga-avatar-line-height);
  color: var(--dga-text-default);
  text-align: center;
}

.dga-avatar__ring {
  position: absolute;
  inset: 0;
  border-radius: var(--dga-avatar-radius);
  border: 1px solid rgba(22, 22, 22, 0.2);
  pointer-events: none;
}

.dga-avatar--circle {
  --dga-avatar-radius: var(--dga-radius-full);
}

.dga-avatar--square {
  --dga-avatar-radius: var(--dga-radius-md);
}

.dga-avatar--24 {
  --dga-avatar-size: 24px;
  --dga-avatar-font-size: var(--dga-text-2xs-size);
  --dga-avatar-line-height: var(--dga-text-2xs-line);
}

.dga-avatar--32 {
  --dga-avatar-size: 32px;
  --dga-avatar-font-size: var(--dga-text-xs-size);
  --dga-avatar-line-height: var(--dga-text-xs-line);
}

.dga-avatar--40 {
  --dga-avatar-size: 40px;
  --dga-avatar-font-size: var(--dga-text-sm-size);
  --dga-avatar-line-height: var(--dga-text-sm-line);
}

.dga-avatar--48 {
  --dga-avatar-size: 48px;
  --dga-avatar-font-size: var(--dga-text-md-size);
  --dga-avatar-line-height: var(--dga-text-md-line);
}

.dga-avatar--64 {
  --dga-avatar-size: 64px;
  --dga-avatar-font-size: var(--dga-text-lg-size);
  --dga-avatar-line-height: var(--dga-text-lg-line);
}

.dga-avatar--80 {
  --dga-avatar-size: 80px;
  --dga-avatar-font-size: var(--dga-text-xl-size);
  --dga-avatar-line-height: var(--dga-text-xl-line);
}

.dga-avatar--120 {
  --dga-avatar-size: 120px;
  --dga-avatar-font-size: var(--dga-display-xs-size);
  --dga-avatar-line-height: var(--dga-display-xs-line);
}
`;
  }
}

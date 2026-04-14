import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface PlaygroundField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'boolean';
  options?: string[];
  visibleWhen?: (props: any) => boolean;
}

export interface PlaygroundConfig {
  title: string;
  description: string;
  selector: string;
  componentName: string;
  textFields: PlaygroundField[];
  textareaFields: PlaygroundField[];
  selectFields: PlaygroundField[];
  booleanFields: PlaygroundField[];
  generateHtml: (props: any) => string;
  generateCss: (props: any) => string;
}

type CodeTab = 'html' | 'typescript' | 'css';

@Component({
  selector: 'dga-playground',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dga-playground.component.html',
  styleUrl: './dga-playground.component.scss'
})
export class DgaPlaygroundComponent {
  @Input() config!: PlaygroundConfig;
  @Input() componentProps: any = {};

  activeTab = signal<CodeTab>('html');
  copySuccess = signal<CodeTab | null>(null);

  get htmlSnippet(): string {
    if (!this.config?.generateHtml) return '';
    return this.config.generateHtml(this.componentProps);
  }

  get tsSnippet(): string {
    if (!this.config?.componentName) return '';
    return `import { Component } from '@angular/core';

@Component({
  selector: '${this.config.selector}-export',
  standalone: true,
  templateUrl: './${this.config.selector}-export.component.html',
  styleUrl: './${this.config.selector}-export.component.scss'
})
export class ${this.config.componentName}ExportComponent {}
`;
  }

  get cssSnippet(): string {
    if (!this.config?.generateCss) return '';
    return this.config.generateCss(this.componentProps);
  }

  get currentSnippet(): string {
    switch (this.activeTab()) {
      case 'html': return this.htmlSnippet;
      case 'typescript': return this.tsSnippet;
      case 'css': return this.cssSnippet;
    }
  }

  get currentFileName(): string {
    switch (this.activeTab()) {
      case 'html': return `${this.config?.selector || 'component'}.component.html`;
      case 'typescript': return `${this.config?.selector || 'component'}.component.ts`;
      case 'css': return `${this.config?.selector || 'component'}.component.scss`;
    }
  }

  get lineNumbers(): number[] {
    const lines = this.currentSnippet.split('\n').length;
    return Array.from({ length: lines }, (_, i) => i + 1);
  }

  setActiveTab(tab: CodeTab): void {
    this.activeTab.set(tab);
  }

  copyToClipboard(value: string, tab: CodeTab): void {
    if (!value) return;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(value).then(() => {
        this.copySuccess.set(tab);
        setTimeout(() => this.copySuccess.set(null), 2000);
      }).catch(() => undefined);
    }
  }
}

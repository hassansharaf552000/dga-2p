import { Component, Input } from '@angular/core';

type CodeSnippetType = 'single-line' | 'multi-line';

@Component({
  selector: 'dga-code-snippet',
  standalone: true,
  imports: [],
  templateUrl: './dga-code-snippet.component.html',
  styleUrl: './dga-code-snippet.component.scss'
})
export class DgaCodeSnippetComponent {
  @Input() type: CodeSnippetType = 'single-line';
  @Input() prefix = 'npm';
  @Input() code = 'npm install nds-design-system@^0.0.1';
  @Input() showCopyButton = true;
  @Input() showTabList = true;
  @Input() showSidebar = true;
  @Input() showShowMore = true;
  @Input() tabs: string[] = ['Java', 'Python', 'C', 'C++', 'HTML', 'PHP'];
  @Input() activeTabIndex = 0;

  readonly singleLineCopyIconUrl =
    'https://www.figma.com/api/mcp/asset/982e546a-a71b-4693-bafe-d4605a6ff5da';
  readonly multiLineCopyIconUrl =
    'https://www.figma.com/api/mcp/asset/59928426-d62e-41a8-b4ed-5bb7283d5d79';
  readonly showMoreIconUrl =
    'https://www.figma.com/api/mcp/asset/00412967-f256-4ebe-b009-2a80a44ffae4';

  get highlightedLines(): { text: string; isComment: boolean }[] {
    return this.codeLines.map((line) => {
      const trimmed = line.trimStart();
      const isComment = trimmed.startsWith('//');
      return { text: line === '' ? ' ' : line, isComment };
    });
  }

  get codeLines(): string[] {
    return this.code.split('\n');
  }

  get lineNumbers(): number[] {
    return Array.from({ length: this.codeLines.length }, (_, i) => i + 1);
  }
}

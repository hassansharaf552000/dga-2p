import { Component, EventEmitter, Input, Output } from '@angular/core';

export type CarouselVariant = 'dots' | 'arrows' | 'dots-only';

export interface CarouselSlide {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
}

let nextCarouselId = 0;

@Component({
  selector: 'dga-carousel',
  standalone: true,
  imports: [],
  templateUrl: './dga-carousel.component.html',
  styleUrl: './dga-carousel.component.scss'
})
export class DgaCarouselComponent {
  @Input() variant: CarouselVariant = 'dots';
  @Input() rtl = false;
  @Input() loop = false;
  @Input() ariaLabel = 'Carousel';
  @Input() slides: readonly CarouselSlide[] = [];
  @Input() total: number | string = 4;

  @Input()
  set current(value: number | string) {
    this.activeIndex = this.toIndex(value);
  }
  get current(): number {
    return this.safeActiveIndex;
  }

  @Input('style')
  set legacyStyle(value: CarouselVariant | null | undefined) {
    if (value) this.variant = value;
  }

  @Output() currentChange = new EventEmitter<number>();

  readonly carouselId = `dga-carousel-${nextCarouselId++}`;
  private activeIndex = 0;

  get carouselClasses(): string[] {
    return [
      'dga-carousel',
      `dga-carousel--${this.variant}`,
      this.rtl ? 'dga-carousel--rtl' : ''
    ].filter(Boolean);
  }

  get showContent(): boolean {
    return this.variant !== 'dots-only';
  }

  get showArrows(): boolean {
    return this.variant === 'arrows';
  }

  get showDots(): boolean {
    return this.variant !== 'arrows';
  }

  get resolvedSlides(): CarouselSlide[] {
    if (this.slides.length) return [...this.slides];

    return Array.from({ length: this.slideCount }, (_, index) => ({
      title: 'SWAP WITH CONTENT COMPONENT',
      description: index === this.safeActiveIndex ? 'Replace with any other component' : ''
    }));
  }

  get slideCount(): number {
    if (this.slides.length) return this.slides.length;
    const total = Math.floor(Number(this.total));
    return Number.isFinite(total) && total > 0 ? total : 1;
  }

  get indicators(): number[] {
    return Array.from({ length: this.slideCount }, (_, index) => index);
  }

  get safeActiveIndex(): number {
    return Math.min(Math.max(this.activeIndex, 0), this.slideCount - 1);
  }

  get currentSlide(): CarouselSlide {
    return this.resolvedSlides[this.safeActiveIndex] ?? {};
  }

  get canGoPrevious(): boolean {
    return this.slideCount > 1 && (this.loop || this.safeActiveIndex > 0);
  }

  get canGoNext(): boolean {
    return this.slideCount > 1 && (this.loop || this.safeActiveIndex < this.slideCount - 1);
  }

  previous(): void {
    if (!this.canGoPrevious) return;
    this.goTo(this.safeActiveIndex === 0 ? this.slideCount - 1 : this.safeActiveIndex - 1);
  }

  next(): void {
    if (!this.canGoNext) return;
    this.goTo(this.safeActiveIndex === this.slideCount - 1 ? 0 : this.safeActiveIndex + 1);
  }

  goTo(index: number | string): void {
    const nextIndex = this.toIndex(index);
    if (nextIndex === this.safeActiveIndex) return;

    this.activeIndex = nextIndex;
    this.currentChange.emit(this.safeActiveIndex);
  }

  onKeydown(event: KeyboardEvent): void {
    const previousKey = this.rtl ? 'ArrowRight' : 'ArrowLeft';
    const nextKey = this.rtl ? 'ArrowLeft' : 'ArrowRight';

    if (event.key === previousKey) {
      event.preventDefault();
      this.previous();
    } else if (event.key === nextKey) {
      event.preventDefault();
      this.next();
    } else if (event.key === 'Home') {
      event.preventDefault();
      this.goTo(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      this.goTo(this.slideCount - 1);
    }
  }

  slideLabel(index: number): string {
    return `Slide ${index + 1} of ${this.slideCount}`;
  }

  private toIndex(value: number | string): number {
    const index = Math.floor(Number(value));
    if (!Number.isFinite(index)) return 0;
    return Math.min(Math.max(index, 0), this.slideCount - 1);
  }
}

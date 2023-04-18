import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const dir = {
  ArrowLeft: -1,
  ArrowRight: 1,
};

@Directive({ selector: '[bgCarousel]' })
export class BackgroundCarouselDirective implements AfterViewInit {
  @Input() bgCarousel: string[] = [];

  private _colorIndexSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {}

  @HostListener('document:keyup', ['$event'])
  onKeyPress(e: KeyboardEvent) {
    const key =
      e.key === 'ArrowRight'
        ? 'ArrowRight'
        : e.key === 'ArrowLeft'
        ? 'ArrowLeft'
        : undefined;

    if (this.bgCarousel.length === 0 || key === undefined) return;

    const colorIndex = this._colorIndexSubject.value;

    const nextColorIndex =
      colorIndex + dir[key] > this.bgCarousel.length - 1
        ? 0
        : colorIndex + dir[key] < 0
        ? this.bgCarousel.length - 1
        : colorIndex + dir[key];

    this._colorIndexSubject.next(nextColorIndex);

    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      this.bgCarousel[nextColorIndex]
    );
  }

  ngAfterViewInit(): void {
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      this.bgCarousel[0]
    );
  }
}

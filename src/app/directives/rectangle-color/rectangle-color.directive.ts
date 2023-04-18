import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { RectangleService } from '../../services/rectangle.service';

@Directive({ selector: '[rectangleColor]' })
export class RectangleColorDirective implements AfterViewInit {
  constructor(
    private _rectangleService: RectangleService,
    private _renderer2: Renderer2,
    private _elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    this._rectangleService
      .getRectangleColor()
      .subscribe((color) =>
        this._renderer2.setStyle(this._elementRef.nativeElement, 'backgroundColor', color)
      );
  }
}

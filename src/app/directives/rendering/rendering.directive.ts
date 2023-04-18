import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({ selector: '[rendering]' })
export class RenderingDirective {
  private _isGrabbed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _offsetWidth: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _width: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    this._isGrabbed.next(true);
    const target = e.currentTarget as HTMLElement;
    this._renderer2.setStyle(this._elementRef.nativeElement, 'cursor', `grabbing`);
    this._offsetWidth.next(e.offsetX);
    this._width.next(target.offsetWidth);
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const width = e.clientX - this._offsetWidth.value + this._width.value;
    if (!this._isGrabbed.value || width < 100) return;
    this._renderer2.setStyle(this._elementRef.nativeElement, 'width', width + 'px');
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
    this._isGrabbed.next(false);
    this._renderer2.setStyle(this._elementRef.nativeElement, 'cursor', `grab`);
  }
}

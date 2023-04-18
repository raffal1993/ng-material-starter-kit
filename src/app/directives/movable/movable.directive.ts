import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({ selector: '[moveable]' })
export class MovableDirective {
  private _isMouseClickedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private _offsetsSubject: BehaviorSubject<{ x: number; y: number }> =
    new BehaviorSubject<{ x: number; y: number }>({ x: 0, y: 0 });

  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    this._isMouseClickedSubject.next(true);
    this._offsetsSubject.next({ x: e.offsetX, y: e.offsetY });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this._isMouseClickedSubject.value) return;
    const { x, y } = this._offsetsSubject.value;
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'transform',
      `translate3d(${e.clientX - x}px, ${e.clientY - y}px, 0)`
    );
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: MouseEvent) {
    this._isMouseClickedSubject.next(false);
  }
}

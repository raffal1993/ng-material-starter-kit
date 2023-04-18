import { Directive, HostListener } from '@angular/core';
import { RectangleService } from '../../services/rectangle.service';

@Directive({ selector: '[saveRectangleColor]' })
export class SaveRectangleColorDirective {
  @HostListener('dblclick', [`$event`])
  onDblClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const color = target.style.backgroundColor;
    if (!color) return;
    this._rectangleService.saveRectangleColor(color).subscribe();
  }
  constructor(private _rectangleService: RectangleService) {}
}

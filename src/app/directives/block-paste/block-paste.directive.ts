import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[input[blockPaste],textarea[blockPaste]' })
export class BlockPasteDirective {
  @HostListener('paste', ['$event'])
  onPasteDisabled(event: ClipboardEvent) {
    event.preventDefault();
  }
}

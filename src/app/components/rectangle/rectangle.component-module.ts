import { NgModule } from '@angular/core';
import { RectangleColorDirectiveModule } from 'src/app/directives/rectangle-color/rectangle-color.directive-module';
import { RenderingDirectiveModule } from 'src/app/directives/rendering/rendering.directive-module';
import { SaveRectangleColorDirectiveModule } from 'src/app/directives/save-rectangle-color/save-rectangle-color.directive-module';
import { RectangleComponent } from './rectangle.component';

@NgModule({
  imports: [
    RenderingDirectiveModule,
    RectangleColorDirectiveModule,
    SaveRectangleColorDirectiveModule,
  ],
  declarations: [RectangleComponent],
  providers: [],
  exports: [RectangleComponent],
})
export class RectangleComponentModule {}

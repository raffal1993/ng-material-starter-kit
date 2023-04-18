import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackBarDirectiveModule } from '../../directives/snack-bar/snack-bar.directive-module';
import { ConfirmDialogDirectiveModule } from '../../directives/confirm-dialog/confirm-dialog.directive-module';
import { BlockPasteDirectiveModule } from '../../directives/block-paste/block-paste.directive-module';
import { BackgroundCarouselDirectiveModule } from '../../directives/background-carousel/background-carousel.directive-module';
import { MovableDirectiveModule } from '../../directives/movable/movable.directive-module';
import { DeleteProductDirectiveModule } from '../../directives/delete-product/delete-product.directive-module';
import { FeatureFlagsDirectiveModule } from '../../directives/feature-flags/feature-flags.directive-module';
import { UrlValidatorDirectiveModule } from '../../directives/url-validator/url-validator.directive-module';
import { TestComponent } from './test.component';
import { TelValidatorDirectiveModule } from '../../directives/tel-validator/tel-validator.directive-module';

@NgModule({
  imports: [
    CommonModule,
    SnackBarDirectiveModule,
    ConfirmDialogDirectiveModule,
    BlockPasteDirectiveModule,
    BackgroundCarouselDirectiveModule,
    MovableDirectiveModule,
    DeleteProductDirectiveModule,
    FeatureFlagsDirectiveModule,
    UrlValidatorDirectiveModule,
    ReactiveFormsModule,
    TelValidatorDirectiveModule,
  ],
  declarations: [TestComponent],
  providers: [],
  exports: [TestComponent],
})
export class TestComponentModule {}

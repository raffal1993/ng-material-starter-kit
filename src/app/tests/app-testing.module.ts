import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { SnackbarDirectiveTestComponent } from './snackbar-directive.test-component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MoveDirectiveTestComponent } from './move-directive.test-component';
import { BgCarouselDirectiveTestComponent } from './bg-carousel-directive.test-component';
import { FeatureFlagDirectiveTestComponent } from './feature-flag-directive.test-component';
import { DeleteProductDirectiveTestComponent } from './delete-product-directive.test-component';
import { BlockPasteDirectiveTestComponent } from './block-paste-directive.test-component';
import { ConfirmDialogDirectiveTestComponent } from './confirm-dialog-directive.test.component';
import { UrlValidatorDirectiveTestComponent } from './url-vaidator-directive.test-component';
import { ReactiveFormsModule } from '@angular/forms';
import { TelValidatorDirectiveTestComponent } from './tel-validator-directive.test-component';
import { SnackBarDirectiveModule } from '../directives/snack-bar/snack-bar.directive-module';
import { ConfirmDialogDirectiveModule } from '../directives/confirm-dialog/confirm-dialog.directive-module';
import { BlockPasteDirectiveModule } from '../directives/block-paste/block-paste.directive-module';
import { BackgroundCarouselDirectiveModule } from '../directives/background-carousel/background-carousel.directive-module';
import { MovableDirectiveModule } from '../directives/movable/movable.directive-module';
import { DeleteProductDirectiveModule } from '../directives/delete-product/delete-product.directive-module';
import { FeatureFlagsDirectiveModule } from '../directives/feature-flags/feature-flags.directive-module';
import { UrlValidatorDirectiveModule } from '../directives/url-validator/url-validator.directive-module';
import { TelValidatorDirectiveModule } from '../directives/tel-validator/tel-validator.directive-module';

@NgModule({
  declarations: [
    SnackbarDirectiveTestComponent,
    MoveDirectiveTestComponent,
    BgCarouselDirectiveTestComponent,
    FeatureFlagDirectiveTestComponent,
    DeleteProductDirectiveTestComponent,
    BlockPasteDirectiveTestComponent,
    ConfirmDialogDirectiveTestComponent,
    UrlValidatorDirectiveTestComponent,
    TelValidatorDirectiveTestComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SnackBarDirectiveModule,
    ConfirmDialogDirectiveModule,
    BlockPasteDirectiveModule,
    BackgroundCarouselDirectiveModule,
    MovableDirectiveModule,
    DeleteProductDirectiveModule,
    FeatureFlagsDirectiveModule,
    UrlValidatorDirectiveModule,
    TelValidatorDirectiveModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppTestingModule {}

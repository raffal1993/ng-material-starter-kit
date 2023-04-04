import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './../app.component';
import { MaterialModule } from './../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { DistancePipeTestComponent } from './distance-pipe.test-component';
import { FileSizePipeTestComponent } from './file-size-pipe.test-component';
import { TeaserPipeTestComponent } from './teaser-pipe.test-component';
import { CreditCardNumberPipeTestComponent } from './credit-card-number-pipe.test-component';
import { PhoneNumberPipeTestComponent } from './phone-number-pipe.test-component';
import { PlaceholderImgPipeTestComponent } from './placeholder-img-pipe.test-component';
import { SortPipeTestComponent } from './sort-pipe.test-component';
import { FilterPipeTestComponent } from './filter-pipe.test-component';
import { SearchPipeTestComponent } from './search-pipe.test-component';
import { TranslatePipeTestComponent } from './translate-pipe.test-component';
import { MaxNumberPipeTestComponent } from './max-number-pipe.test-component';
import { PluckPipeTestComponent } from './pluck-pipe.test-component';
import { DistancePipeModule } from '../pipes/distance.pipe-module';
import { FileSizePipeModule } from '../pipes/file-size.pipe-module';
import { TeaserPipeModule } from '../pipes/teaser.pipe-module';
import { FilterPipeModule } from '../pipes/filter.pipe-module';
import { SortPipeModule } from '../pipes/sort.pipe-module';
import { SearchPipeModule } from '../pipes/search.pipe-module';
import { CreditCardNumberPipeModule } from '../pipes/credit-card-number.pipe-module';
import { PhoneNumberPipeModule } from '../pipes/phone-number.pipe-module';
import { PlaceholderImgPipeModule } from '../pipes/placeholder-img.pipe-module';
import { PLACEHOLDER_IMAGE_SOURCE } from '../config/placeholder-image-source';
import { TranslatePipeModule } from '../pipes/translate.pipe-module';
import { TRANSLATION } from '../config/translation';
import { PluckPipeModule } from '../pipes/pluck.pipe-module';
import { MaxNumberPipeModule } from '../pipes/max-number.pipe-module';
import { IbanPipeTestComponent } from './iban-pipe.test-component';
import { IbanPipeModule } from '../pipes/iban.pipe-module';
import { DatePipeTestComponent } from './date-pipe.test-component';
import { DatePipeModule } from '../pipes/date.pipe-module';
import { HashPipeTestComponent } from './hash-pipe.test-component';
import { HashPipeModule } from '../pipes/hash.pipe-module';

@NgModule({
  declarations: [
    AppComponent,
    DistancePipeTestComponent,
    FileSizePipeTestComponent,
    TeaserPipeTestComponent,
    CreditCardNumberPipeTestComponent,
    PhoneNumberPipeTestComponent,
    PlaceholderImgPipeTestComponent,
    SortPipeTestComponent,
    FilterPipeTestComponent,
    SearchPipeTestComponent,
    TranslatePipeTestComponent,
    MaxNumberPipeTestComponent,
    PluckPipeTestComponent,
    IbanPipeTestComponent,
    DatePipeTestComponent,
    HashPipeTestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    DistancePipeModule,
    FileSizePipeModule,
    TeaserPipeModule,
    FilterPipeModule,
    SortPipeModule,
    SearchPipeModule,
    CreditCardNumberPipeModule,
    PhoneNumberPipeModule,
    PlaceholderImgPipeModule,
    TranslatePipeModule,
    PluckPipeModule,
    MaxNumberPipeModule,
    IbanPipeModule,
    DatePipeModule,
    HashPipeModule,
  ],
  providers: [
    {
      provide: PLACEHOLDER_IMAGE_SOURCE,
      useValue: `/assets/img/placeholder.png`,
    },
    {
      provide: TRANSLATION,
      useValue: {
        en: {
          ONE: 'One',
        },
        pl: {
          ONE: 'Jeden',
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppTestingModule {}

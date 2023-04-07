import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ShortTextPipeModule } from '../../pipes/short-text.pipe-module';
import { ImagePipeModule } from '../../pipes/image.pipe-module';
import { PricePipeModule } from '../../pipes/price.pipe-module';
import { ProductCodePipeModule } from '../../pipes/product-code.pipe-module';
import { PublishedSincePipeModule } from '../../pipes/published-since.pipe-module';
import { LangPipeModule } from '../../pipes/lang.pipe-module';
import { ProductsComponent } from './products.component';
import { SelectedNamePipeModule } from 'src/app/pipes/selected-name.pipe-module';

@NgModule({
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    ShortTextPipeModule,
    ImagePipeModule,
    PricePipeModule,
    ProductCodePipeModule,
    PublishedSincePipeModule,
    LangPipeModule,
    SelectedNamePipeModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatOptionModule,
    FlexModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [ProductsComponent],
  providers: [{ provide: 'IMAGE_SRC', useValue: '/assets/placeholder-image.png' }],
  exports: [ProductsComponent],
})
export class ProductsComponentModule {}

// providers: [{ provide: 'IMAGE_SRC', useValue: '/assets/placeholder-image.png' }],

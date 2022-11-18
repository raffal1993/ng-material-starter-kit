import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesServiceModule } from './services/categories.service-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    ProductComponentModule,
    ProductServiceModule,
    CategoriesServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

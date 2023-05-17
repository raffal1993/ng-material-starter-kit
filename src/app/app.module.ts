import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponentModule } from './components/footer/footer.component-module';
import { ArticlesComponentModule } from './components/articles/articles.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    FooterComponentModule,
    ArticlesComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

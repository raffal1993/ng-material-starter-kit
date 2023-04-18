import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RectangleComponentModule } from './components/rectangle/rectangle.component-module';
import { RectangleColorPickerComponentModule } from './components/rectangle-color-picker/rectangle-color-picker.component-module';
import { HelpComponentModule } from './components/help/help.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    RectangleComponentModule,
    RectangleColorPickerComponentModule,
    HelpComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

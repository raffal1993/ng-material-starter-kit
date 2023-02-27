import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthLoginInterceptor } from './interceptors/auth-login.interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: Storage, useValue: localStorage },
    { provide: HTTP_INTERCEPTORS, useClass: AuthLoginInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

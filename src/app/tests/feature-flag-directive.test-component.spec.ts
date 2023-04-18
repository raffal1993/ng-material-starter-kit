import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of, throwError } from 'rxjs';
import { FeatureFlagDirectiveTestComponent } from './feature-flag-directive.test-component';
import { AppTestingModule } from './app-testing.module';

describe('FeatureFlagDirective', () => {
  const featureFlags = [{ name: 'FEATURE_1' }];
  it('should show enabled', fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [FeatureFlagDirectiveTestComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(FeatureFlagDirectiveTestComponent);
    const component = fixture.componentInstance;
    component.data = featureFlags[0].name;

    const httpClient = TestBed.inject(HttpClient);
    const getMock = jest
      .spyOn(httpClient, 'get')
      .mockReturnValue(of(featureFlags));

    fixture.detectChanges();
    tick();

    const element = fixture.debugElement.query(
      By.css(`[data-test-id="directive"]`)
    );
    fixture.detectChanges();

    expect(getMock).toHaveBeenCalledWith(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/feature-flags`
    );
    expect(element.nativeElement.textContent).toEqual('Enabled');
  }));

  it('should show fallback', fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [FeatureFlagDirectiveTestComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(FeatureFlagDirectiveTestComponent);
    const component = fixture.componentInstance;
    component.data = 'NOT_ENABLED_FEATURE';
    const httpClient = TestBed.inject(HttpClient);
    const getMock = jest
      .spyOn(httpClient, 'get')
      .mockReturnValue(of(featureFlags));

    fixture.detectChanges();
    tick();

    const element = fixture.debugElement.query(
      By.css(`[data-test-id="directive"]`)
    );
    fixture.detectChanges();

    expect(getMock).toHaveBeenCalledWith(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/feature-flags`
    );
    expect(element.nativeElement.textContent).toEqual('Fallback');
  }));
});

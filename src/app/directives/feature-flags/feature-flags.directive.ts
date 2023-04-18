import {
  AfterViewInit,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { take } from 'rxjs/operators';
import { FlagsService } from '../../services/flags.service';

@Directive({ selector: '[featureFlag]' })
export class FeatureFlagsDirective implements AfterViewInit {
  @Input() featureFlag: string = '';
  @Input() featureFlagElse: TemplateRef<any> | null = null;

  constructor(
    private _flagsService: FlagsService,
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit(): void {
    this._flagsService
      .getAll()
      .pipe(take(1))
      .subscribe((data) => {
        if (data.some((flag) => flag.name === this.featureFlag)) {
          this._viewContainerRef.createEmbeddedView(this._templateRef);
        } else if (this.featureFlagElse)
          this._viewContainerRef.createEmbeddedView(this.featureFlagElse);
      });
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, combineLatest } from 'rxjs';
import { JobsService } from '../../services/jobs.service';
import { JobModel } from '../../models/job.model';

const BASE_URL = 'search-route-multi-jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsComponent {
  readonly searchParams$: Observable<string | undefined> =
    this._activatedRoute.queryParams.pipe(map((params) => params['search']));

  constructor(
    private _jobsService: JobsService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  readonly jobs$: Observable<JobModel[]> = combineLatest([
    this._jobsService.getAll(),
    this.searchParams$,
  ]).pipe(
    map(([jobs, searchParams]) => {
      return searchParams
        ? jobs.filter(
            ({ title, description }) =>
              title.match(new RegExp(searchParams, 'i')) ||
              description.match(new RegExp(searchParams, 'i'))
          )
        : [];
    })
  );

  readonly jobsForm: FormGroup = new FormGroup({ name: new FormControl() });

  onJobsFormSubmitted(jobsForm: FormGroup): void {
    const searchValue = jobsForm.get('name')?.value;

    if (searchValue)
      this._router.navigate([BASE_URL], {
        queryParams: {
          search: searchValue,
        },
      });
    else this._router.navigate([BASE_URL]);
  }
}

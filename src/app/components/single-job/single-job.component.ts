import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { JobTagModel } from 'src/app/models/job-tag.model';
import { SingleJobQueryModel } from 'src/app/queryModels/singleJob';
import { JobPostsService } from '../../services/job-posts.service';
import { JobTagsService } from '../../services/job-tags.service';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleJobComponent {
  readonly jobs$: Observable<SingleJobQueryModel[]> = combineLatest([
    this._jobPostsService.getAll(),
    this._jobTagsService.getAll(),
  ]).pipe(
    map(([jobPosts, jobTags]) =>
      jobPosts.map((JP) => ({
        title: JP.title,
        description: JP.description,
        jobTagNames: this._getJobTags(JP.jobTagIds, jobTags),
      }))
    )
  );

  constructor(private _jobPostsService: JobPostsService, private _jobTagsService: JobTagsService) {}

  private _getJobTags(jobTagIds: (string | number)[], jobTags: JobTagModel[]): string[] {
    return jobTagIds.reduce((acc: string[], curr: number | string): string[] => {
      const newJobTag = jobTags.find((JT) => JT.id.toString() === curr.toString())?.name || '';
      return [...acc, newJobTag];
    }, []);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPostModel } from '../models/job-post.model';

@Injectable({ providedIn: 'root' })
export class JobPostsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<JobPostModel[]> {
    return this._httpClient.get<JobPostModel[]>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts`
    );
  }
}

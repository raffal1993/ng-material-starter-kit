import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UniversityModel } from '../models/university.model';

@Injectable()
export class UniversitiesService {
  constructor(private _httpClient: HttpClient) {}

  getUniversitiesByCountry(country: string): Observable<UniversityModel[]> {
    return this._httpClient
      .get<UniversityModel[]>(
        `http://universities.hipolabs.com/search?country=${country}`
      )
      .pipe(
        map((universities) => (universities.length === 0 ? [] : universities))
      );
  }
}

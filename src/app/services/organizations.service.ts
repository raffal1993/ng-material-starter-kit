import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  OrganizationModel,
  OrganizationTeamsModel,
  OrganizationUsersModel,
} from '../models/organization.model';

@Injectable({ providedIn: 'root' })
export class OrganizationsService {
  constructor(private _httpClient: HttpClient) {}

  getOrganizations(): Observable<OrganizationModel[]> {
    return this._httpClient.get<OrganizationModel[]>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/organizations`
    );
  }

  getOrganizationTeams(id: string): Observable<OrganizationTeamsModel[]> {
    return this._httpClient.get<OrganizationTeamsModel[]>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/organizations/${id}/teams`
    );
  }

  getOrganizationUsers(): Observable<OrganizationUsersModel[]> {
    return this._httpClient.get<OrganizationUsersModel[]>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/users-with-avatars`
    );
  }
}

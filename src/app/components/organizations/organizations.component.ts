import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, forkJoin, map, Observable, shareReplay, switchMap } from 'rxjs';
import { OrganizationTeamsModel, OrganizationUsersModel } from 'src/app/models/organization.model';
import { OrganizationQueryModel } from 'src/app/query-models/organization.query-model';
import { OrganizationsService } from '../../services/organizations.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationsComponent {
  readonly organizations$: Observable<OrganizationQueryModel[]> = combineLatest([
    this._organizationsService.getOrganizations(),
    this._organizationsService.getOrganizationUsers(),
  ]).pipe(
    switchMap(([organizations, users]) =>
      forkJoin(
        organizations.map((org) =>
          this._organizationsService.getOrganizationTeams(org.id).pipe(
            map((teams) => ({
              name: org.name,
              teams: this._getTeams(teams, users),
            }))
          )
        )
      )
    ),
    shareReplay(1)
  );

  constructor(private _organizationsService: OrganizationsService) {}

  private _getTeams(teams: OrganizationTeamsModel[], users: OrganizationUsersModel[]) {
    return teams.map((team) => ({
      name: team.name,
      images: this._getImages(team.userIds, users),
    }));
  }

  private _getImages(userIds: string[], users: OrganizationUsersModel[]): string[] {
    return userIds.map((id) => users.find((user) => user.id === id)?.avatar || '');
  }
}

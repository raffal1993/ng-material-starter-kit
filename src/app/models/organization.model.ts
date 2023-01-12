export interface OrganizationModel {
  name: string;
  id: string;
}

export interface OrganizationTeamsModel {
  name: string;
  userIds: string[];
  id: string;
  organizationId: string;
}

export interface OrganizationUsersModel {
  name: string;
  avatar: string;
  id: string;
}

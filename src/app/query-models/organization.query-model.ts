export interface OrganizationQueryModel {
  name: string;
  teams: Teams[];
}

export interface Teams {
  name: string;
  images: string[];
}

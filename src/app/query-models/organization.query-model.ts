export interface OrganizationQueryModel {
  name: string;
  teams: Teams[];
}

interface Teams {
  name: string;
  images: string[];
}

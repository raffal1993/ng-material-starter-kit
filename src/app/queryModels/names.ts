export interface NamesQueryModel {
  names?: Name[];
  isError: boolean;
  isLoading: boolean;
}

interface Name {
  name: string;
  id: number;
}

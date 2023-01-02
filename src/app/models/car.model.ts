export interface CarBrand {
  name: string;
  id: string;
}
export interface CarComfortFeature {
  name: string;
  id: string;
}

export interface Car {
  model: string | null;
  description: string | null;
  brandId: string | null;
  comfortFeatureIds: (string | null)[] | null;
  securityFeatureIds: (string | null)[];
  id: string;
}

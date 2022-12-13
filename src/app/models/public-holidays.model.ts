export interface PublicHolidaysModel {
  readonly date: string;
  readonly localName: string;
  readonly name: string;
  readonly countryCode: string;
  readonly fixed: boolean;
  readonly global: boolean;
  readonly counties: null | string[];
  readonly launchYear: null | number;
  readonly type: string;
}

export interface UserModel {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
}

interface Name {
  firstname: string;
  lastname: string;
}

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geolocation;
}

interface Geolocation {
  lat: string;
  long: string;
}

export interface UserRemote {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserRemoteAddress;
  phone: string;
  website: string;
  company: UserRemoteCompany;
}

export interface UserRemoteAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserRemoteGeo;
}

export interface UserRemoteGeo {
  lat: string;
  lng: string;
}

export interface UserRemoteCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

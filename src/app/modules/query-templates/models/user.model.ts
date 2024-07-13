export interface User {
  name: string;
  email: string;
  thumbnail: string;
  address: UserAddress;
  role: string;
}

export interface UserAddress {
  city: string;
  country: string;
}

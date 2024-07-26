import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, of } from 'rxjs';

import { type User } from '../models/user.model';
import { type UserRemote } from '../models/user-remote.model';
import { USERS_DATA } from '../data/users.data';

@Injectable()
export class UsersService {
  public static instanceNumber = 0;

  constructor(private _httpClient: HttpClient) {
    UsersService.instanceNumber += 1;
  }

  public getLocalUsers(): Observable<User[]> {
    return of(USERS_DATA);
  }

  public getRemoteUsers(): Observable<User[]> {
    return this._httpClient
      .get<UserRemote[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((usersRemote: UserRemote[]) => {
          return usersRemote.map((user) => ({
            name: user.name,
            email: user.email,
            thumbnail:
              USERS_DATA[Math.floor(Math.random() * USERS_DATA.length)]
                .thumbnail,
            address: {
              city: user?.address.city,
              country: user?.address.suite,
            },
            role: 'User',
          }));
        })
      );
  }
}

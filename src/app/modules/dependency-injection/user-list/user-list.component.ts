import { Component, Inject, OnInit } from '@angular/core';

import { type User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import {
  API_CONFIG_TOKEN,
  apiConfig,
  ApiConfig,
} from '../services/api-config.provider';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: ``,
  providers: [
    /**{
      // NO GOZAS DEL TREE SHAKING
      provide: API_CONFIG_TOKEN,
      // useFactory: () => apiConfig,
      useValue: apiConfig,
    },*/
  ],
})
export class UserListComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private _usersService: UsersService,
    @Inject(API_CONFIG_TOKEN)
    private _apiConfig: ApiConfig
  ) {}

  ngOnInit(): void {
    this._usersService.getRemoteUsers().subscribe((usersData) => {
      this.users = usersData;
    });

    console.log(this._apiConfig);
  }
}

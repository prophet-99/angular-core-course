import { Component, Inject, OnInit, Optional } from '@angular/core';

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
  providers: [UsersService],
})
export class UserListComponent implements OnInit {
  public users: User[] = [];

  constructor(
    @Optional() private _usersService: UsersService,
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

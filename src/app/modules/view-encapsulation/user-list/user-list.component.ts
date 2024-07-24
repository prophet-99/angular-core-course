import { Component, OnInit } from '@angular/core';

import { type User } from '../models/user.model';
import { USERS_DATA } from '../data/users.data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: ``,
})
export class UserListComponent implements OnInit {
  public users: User[] = [];

  ngOnInit(): void {
    this.users = USERS_DATA;
  }
}

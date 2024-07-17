import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { type User } from '../models/user.model';
import { USERS_DATA } from '../data/users.data';

import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: ``,
})
export class UserListComponent implements OnInit {
  public users: User[] = [];
  @ViewChild('userCard')
  public userCardRef!: UserCardComponent;
  @ViewChildren('userCard') public userCardsRef!: QueryList<UserCardComponent>;

  ngOnInit(): void {
    this.users = [USERS_DATA[1]];
  }
}

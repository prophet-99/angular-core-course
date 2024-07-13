import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NgClass } from '@angular/common';

import { type User } from '../models/user.model';
import { USERS_DATA } from '../data/users.data';

import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: ``,
})
export class UserListComponent implements OnInit, AfterViewInit {
  public users: User[] = [];
  @ViewChild('userCard')
  public userCardRef!: UserCardComponent;
  @ViewChildren('userCard') public userCardsRef!: QueryList<UserCardComponent>;

  ngOnInit(): void {
    this.users = USERS_DATA;
  }

  ngAfterViewInit(): void {
    // console.log('[ngAfterViewInit]: ', this.userCardRef);
    // console.log('[ngAfterViewInit]: ', this.userCardsRef);

    this.userCardsRef.changes.subscribe((userCardChanges) =>
      console.log(userCardChanges)
    );

    // this.userCardsRef.first;
    // this.userCardsRef.last;
    // this.userCardsRef.map
  }

  public doTest(): void {
    // console.log(this.userCardRef);
    this.users = [...this.users, USERS_DATA[0]];
  }
}

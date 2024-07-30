import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';

import { type User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { API_CONFIG_TOKEN, ApiConfig } from '../services/api-config.provider';
import { USERS_DATA } from '../data/users.data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: ``,
  providers: [UsersService],
  // changeDetection: ChangeDetectionStrategy.OnPush, //* -> checkOnce
  // changeDetection: ChangeDetectionStrategy.Default, //* -> checkAlways
})
export class UserListComponent implements OnInit, DoCheck {
  public users: User[] = [];
  public users$!: Observable<User[]>;
  private _updateView = false;

  constructor(
    @Optional() private _usersService: UsersService,
    @Inject(API_CONFIG_TOKEN)
    private _apiConfig: ApiConfig,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._changeDetectorRef.detach();
    // this.users = USERS_DATA;

    this._usersService.getRemoteUsers().subscribe((usersData) => {
      this.users = usersData;
      this._updateView = true;
    }); //* -> ASÍNCRONO

    // this.users$ = this._usersService.getRemoteUsers();
  }

  ngDoCheck(): void {
    console.log('[ngDoCheck] run!');
    if (this._updateView) {
      console.log('[ngDoCheck] -> detectChanges()');
      this._changeDetectorRef.detectChanges();
      // ->
      this._updateView = false;
    }
  }

  public updateSomeUser(): void {
    // this.users[0].name = 'Alexander Av.'; //* MUTANDO OBJETO
    this.users[0] = {
      ...this.users[0],
      name: 'Alexander Av.',
    };
    this._updateView = true;
  }
}

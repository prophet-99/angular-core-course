import { Component, Input, Self, SkipSelf, TemplateRef } from '@angular/core';

import { type User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  providers: [UsersService],
})
export class UserCardComponent {
  @Input({ required: true }) public user!: User | null;
  @Input() public notImageTmpl!: TemplateRef<any>;

  constructor(
    // @Self() private usersService: UsersService,
    @SkipSelf() private usersService: UsersService
  ) {}

  public showMore(): void {}
}

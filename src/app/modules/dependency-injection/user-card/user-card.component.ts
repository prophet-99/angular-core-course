import { Component, Input, TemplateRef } from '@angular/core';

import { type User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input({ required: true }) public user!: User | null;
  @Input() public notImageTmpl!: TemplateRef<any>;

  // constructor(private usersService: UsersService) {}

  public showMore(): void {}
}

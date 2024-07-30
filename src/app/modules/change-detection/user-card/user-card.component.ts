import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SkipSelf,
  TemplateRef,
} from '@angular/core';

import { type User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  providers: [UsersService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input({ required: true }) public user!: User | null;
  @Input() public notImageTmpl!: TemplateRef<any>;

  constructor(@SkipSelf() private usersService: UsersService) {}

  public showMore(): void {}
}

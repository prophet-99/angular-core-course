import { Component, Input, TemplateRef } from '@angular/core';

import { type User } from '../user-list/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: ``,
})
export class UserCardComponent {
  @Input({ required: true }) public user!: User | null;
  @Input() public notImageTmpl!: TemplateRef<any>;
}

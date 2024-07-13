import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { type User } from '../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: ``,
})
export class UserCardComponent {
  @Input({ required: true }) public user!: User | null;
  @Input() public notImageTmpl!: TemplateRef<any>;
  @ViewChild('userNameId') public userNameRef!: ElementRef<HTMLHeadingElement>;

  public showMore(): void {
    console.log(this.userNameRef);
  }
}

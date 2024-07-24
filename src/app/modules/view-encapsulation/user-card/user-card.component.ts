import {
  AfterContentInit,
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

import { type User } from '../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
  // -> ViewEncapsulation.None
})
export class UserCardComponent implements AfterContentInit {
  @Input({ required: true }) public user!: User | null;
  @Input() public notImageTmpl!: TemplateRef<any>;

  ngAfterContentInit(): void {}

  public showMore(): void {}
}

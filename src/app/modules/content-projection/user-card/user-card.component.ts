import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';

import { type User } from '../models/user.model';
import { UserImgComponent } from '../user-img/user-img.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: ``,
})
export class UserCardComponent implements AfterContentInit {
  @Input({ required: true }) public user!: User | null;
  @Input() public notImageTmpl!: TemplateRef<any>;
  @ContentChild(UserImgComponent, {
    read: ElementRef,
  })
  public userImgPrjRef!: ElementRef<HTMLElement>;
  @ContentChild('userContentPrj')
  public userContentPrjRef!: ElementRef<HTMLImageElement>;

  @ContentChildren(UserImgComponent)
  public userImgsPrjRef!: QueryList<UserImgComponent>;

  ngAfterContentInit(): void {
    console.log('[ngAfterContentInit(img)]:', this.userImgPrjRef);
    console.log('[ngAfterContentInit(content)]:', this.userContentPrjRef);

    console.log('[ngAfterContentInit(QueryList)]:', this.userImgsPrjRef);

    // * this.userImgsPrjRef.changes.subscribe()
    // * this.userImgsPrjRef.first;
    // * this.userImgsPrjRef.last;
  }

  // ngAfterViewInit(): void {
  //   console.log('[ngAfterViewInit(img)]:', this.userImgPrjRef);
  //   console.log('[ngAfterViewInit(content)]:', this.userContentPrjRef);
  // }

  public showMore(): void {
    console.log(this.userImgPrjRef);
  }
}

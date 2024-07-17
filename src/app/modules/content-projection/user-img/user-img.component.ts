import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styles: ``,
})
export class UserImgComponent {
  @Input({ required: true }) public imgUrl!: string;
  @Input() public imgAlt!: string;
}

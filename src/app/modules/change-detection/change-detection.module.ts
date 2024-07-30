import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserImgComponent } from './user-img/user-img.component';

@NgModule({
  declarations: [UserListComponent, UserCardComponent, UserImgComponent],
  imports: [CommonModule, ChangeDetectionRoutingModule],
})
export class ChangeDetectionModule {}

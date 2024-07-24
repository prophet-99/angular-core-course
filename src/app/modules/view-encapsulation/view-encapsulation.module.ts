import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEncapsulationRoutingModule } from './view-encapsulation-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserImgComponent } from './user-img/user-img.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserCardComponent, UserImgComponent, UserListComponent],
  imports: [CommonModule, ViewEncapsulationRoutingModule],
})
export class ViewEncapsulationModule {}

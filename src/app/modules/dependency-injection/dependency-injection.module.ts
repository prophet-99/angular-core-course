import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyInjectionRoutingModule } from './dependency-injection-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserImgComponent } from './user-img/user-img.component';

@NgModule({
  declarations: [UserCardComponent, UserListComponent, UserImgComponent],
  imports: [CommonModule, DependencyInjectionRoutingModule],
})
export class DependencyInjectionModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryTemplatesRoutingModule } from './query-templates-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserCardComponent, UserListComponent],
  imports: [CommonModule, QueryTemplatesRoutingModule],
})
export class QueryTemplatesModule {}

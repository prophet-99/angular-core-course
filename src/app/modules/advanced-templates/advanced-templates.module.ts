import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedTemplatesRoutingModule } from './advanced-templates-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [UserListComponent, UserCardComponent],
  imports: [CommonModule, AdvancedTemplatesRoutingModule],
})
export class AdvancedTemplatesModule {}

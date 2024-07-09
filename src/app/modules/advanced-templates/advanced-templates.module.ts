import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedTemplatesRoutingModule } from './advanced-templates-routing.module';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdvancedTemplatesRoutingModule
  ]
})
export class AdvancedTemplatesModule { }

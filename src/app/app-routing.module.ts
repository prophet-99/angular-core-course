import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'advanced-templates',
    pathMatch: 'full',
  },
  {
    path: 'advanced-templates',
    loadChildren: () =>
      import('./modules/advanced-templates/advanced-templates.module').then(
        (m) => m.AdvancedTemplatesModule
      ),
  },
  {
    path: 'query-templates',
    loadChildren: () =>
      import('./modules/query-templates/query-templates.module').then(
        (m) => m.QueryTemplatesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

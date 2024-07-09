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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

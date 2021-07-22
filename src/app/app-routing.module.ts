import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_INDEXES, ROUTES_NAME } from './shared/enums/routes.enum';

const routes: Routes = [
  {
    path: ROUTES_NAME.MAP,
    loadChildren: () =>
      import('./pages/map/map.module').then((m) => m.MapModule),
    data: {
      index: ROUTES_INDEXES.MAP,
    },
  },
  {
    path: ROUTES_NAME.REPORT,
    loadChildren: () =>
      import('./pages/report/report.module').then((m) => m.ReportModule),
    data: {
      index: ROUTES_INDEXES.REPORT,
    },
  },
  {
    path: '**',
    redirectTo: ROUTES_NAME.MAP,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

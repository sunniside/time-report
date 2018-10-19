import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeReportComponent } from './time-report/time-report.component';

const routes: Routes = [
  { path: 'report', component: TimeReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

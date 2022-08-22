import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    GoogleChartsModule,
    RouterModule.forChild([
      {
          path: '',
          component: DashboardComponent
      }
    ]),
  ]
})
export class DashboardModule { }

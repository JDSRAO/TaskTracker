import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { MaterialDesignModule } from '../material-design/material-design.module';

import { TaskManagementIndexComponent } from '../Task/task-management-index/task-management-index.component';
import { TaskStatsComponent } from '../Task/task-stats/task-stats.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialDesignModule
  ],
  declarations: [TaskManagementIndexComponent, TaskStatsComponent],
  exports :[
    TaskManagementIndexComponent,
    TaskStatsComponent
  ]
})
export class TaskModule { }

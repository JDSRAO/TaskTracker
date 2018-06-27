import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../material-design/material-design.module';
import { UtilsModule } from '../utils/utils.module';

import { TaskManagementIndexComponent } from '../Task/task-management-index/task-management-index.component';
import { TaskStatsComponent } from '../Task/task-stats/task-stats.component';
import { TaskListComponent } from '../Task/task-list/task-list.component';
import { TaskAddComponent } from '../Task/task-add/task-add.component';

const components = [
    TaskManagementIndexComponent
  , TaskStatsComponent
  , TaskListComponent
  , TaskAddComponent
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialDesignModule,
    UtilsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...components],
  exports :[
    ...components
  ]
})
export class TaskModule { }

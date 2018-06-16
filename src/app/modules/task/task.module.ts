import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';

import { TaskManagementIndexComponent } from '../Task/task-management-index/task-management-index.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: [TaskManagementIndexComponent]
})
export class TaskModule { }

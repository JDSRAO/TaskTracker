import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MaterialDesignModule } from '../material-design/material-design.module';

import { TaskModule } from '../task/task.module';
import { TaskManagementIndexComponent } from "../task/task-management-index/task-management-index.component";

const routes : Routes = 
[
  { path : '', component: TaskManagementIndexComponent}
]

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    TaskModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation:  "reload", useHash:  true}),
  ],
  declarations: [
    TaskManagementIndexComponent
  ],
  exports :[
    TaskManagementIndexComponent
  ]
})
export class RoutingModule { }

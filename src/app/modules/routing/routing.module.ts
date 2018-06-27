import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskModule } from '../task/task.module';
import { TaskManagementIndexComponent } from "../task/task-management-index/task-management-index.component";
import { TaskAddComponent } from "../task/task-add/task-add.component";
import { TaskListComponent } from '../Task/task-list/task-list.component';



const taskRoutes : Routes = 
[
  { path : '', component: TaskListComponent}
  , { path : 'add', component: TaskAddComponent}
]
const routes : Routes = 
[
  { path : '', redirectTo: 'task',  pathMatch: 'full'}
  , { path : 'task', component: TaskManagementIndexComponent, children : [...taskRoutes]}
  , {path: '**', redirectTo: '', pathMatch : 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    TaskModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation:  "reload", useHash:  true}),
  ],
  declarations: [
    TaskManagementIndexComponent
    , TaskAddComponent
  ],
  exports :[  ]
})
export class RoutingModule { }

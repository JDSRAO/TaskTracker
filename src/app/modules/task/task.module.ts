import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../material-design/material-design.module';
import { UtilsModule } from '../utils/public-apis';

import  {TaskManagementIndexComponent, TaskStatsComponent, TaskListComponent, TaskAddComponent, TaskMgmtService, ValidateTaskExpiryDirective} from './index';

const components = [
    TaskManagementIndexComponent
  , TaskStatsComponent
  , TaskListComponent
  , TaskAddComponent
]

const directives =[
  ValidateTaskExpiryDirective
];

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
  declarations: [...components, ...directives],
  exports :[
    ...components,
    ...directives
  ],
  providers :[
    TaskMgmtService
  ]
})
export class TaskModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';

import { MessageService } from './services/message.service';

const services = [
  MessageService
]

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: [],
  providers :[
    ...services
  ],
  exports: [
    ...services
  ]
})
export class UtilsModule { }

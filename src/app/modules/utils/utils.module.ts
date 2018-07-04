import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';

import { MessageService, NavBarComponent, TimeAgoPipe, TimeDurationPipe, ConfirmationComponent } from './index';

const services = [
  MessageService
];

const components = [
  NavBarComponent
  , ConfirmationComponent
];

const pipes = [
  TimeAgoPipe, 
  TimeDurationPipe
]

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: [...components, ...pipes ],
  providers :[
    ...services
  ],
  exports: [ ...components, ...pipes  ],
  entryComponents : [
    ConfirmationComponent
  ]
})
export class UtilsModule { }

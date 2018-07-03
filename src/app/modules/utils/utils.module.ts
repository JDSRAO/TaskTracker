import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';

import { MessageService, NavBarComponent, TimeAgoPipe } from './index';

const services = [
  MessageService
];

const components = [
  NavBarComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: [...components, TimeAgoPipe],
  providers :[
    ...services
  ],
  exports: [ ...components, TimeAgoPipe  ]
})
export class UtilsModule { }

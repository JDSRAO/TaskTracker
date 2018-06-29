import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';

import { MessageService } from './services/message.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const services = [
  MessageService
];

const compoennts = [
  NavBarComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: [...compoennts],
  providers :[
    ...services
  ],
  exports: [ ...compoennts  ]
})
export class UtilsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as mdModules from './index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports : [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule    
  ]
})
export class MaterialDesignModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
    MatButtonModule
  , MatCheckboxModule
  , MatInputModule
  , MatIconModule
  , MatFormFieldModule
  , MatRippleModule
  , MatCardModule  
  , MatSelectModule
  , MatProgressBarModule
  , MatChipsModule
  , MatTableModule
  , MatTabsModule
  , MatTooltipModule
  , MatSnackBarModule 
  , MatDatepickerModule
  , MatNativeDateModule
} from '@angular/material';


const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule,
  MatSelectModule,
  MatProgressBarModule,
  MatChipsModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ...modules
  ],
  declarations: [
  ],
  exports : [
    ...modules    
  ]
})
export class MaterialDesignModule { }

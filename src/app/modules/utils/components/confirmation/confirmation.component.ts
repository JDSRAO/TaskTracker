import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string
    , public dialogRef: MatDialogRef<ConfirmationComponent>
  ) { }  

  

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

}

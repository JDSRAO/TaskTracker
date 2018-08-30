import { Injectable } from '@angular/core';
import { MatSnackBar,MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private sb : MatSnackBar
    ,public dialog: MatDialog
  ) { }

  msg(message : string)
  {
    this.sb.open(message,'',{ duration: 1000});
  }

  error(message : string)
  {
    this.sb.open(message);
  }

  confirmation(title : string, message : string) 
  {
    const dialogRef = this.dialog.open
    (
      ConfirmationComponent, 
      {
        width: '350px',
        data: { 'message' : message, 'title' : title}
      }
    );

    return dialogRef.afterClosed();
  }
}

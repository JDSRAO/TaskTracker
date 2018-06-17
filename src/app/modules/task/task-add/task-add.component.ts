import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { MessageService } from '../../utils/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor
  (
    private messageService : MessageService
    , private router : Router
  ) { }
  
  addTask()
  {
    this.messageService.msg('Added successfully');
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}

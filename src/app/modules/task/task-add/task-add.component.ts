import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MessageService } from '@utils/public-apis';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TaskViewModel } from '../_models/task-view-model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  public addTaskForm : FormGroup;
  public taskStatuses : string[];
  targetDateConfig : any = { min : new Date()};

  constructor
  (
    private messageService : MessageService
    , private router : Router
    , private fb : FormBuilder
  ) 
  {
    this.addTaskForm = this.generateForm(new TaskViewModel()); 
  }
  
  addTask()
  {
    this.messageService.msg('Added successfully');
    this.addTaskForm.reset();
    this.router.navigate(['']);
  }

  generateForm(taskViewmodel : TaskViewModel) : FormGroup
  {
    let form = this.fb.group
    ({
      title : [taskViewmodel.title, Validators.required],
      description : [taskViewmodel.description, Validators.required],
      status : [taskViewmodel.status, Validators.required],
      targetDate : [taskViewmodel.targetDate, Validators.required],
    });   
    return form;
  }

  
  ngOnInit() {
  }

}

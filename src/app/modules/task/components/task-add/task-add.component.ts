import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MessageService } from '../../../utils/public-apis';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TaskViewModel } from '../../index';
import { TaskMgmtService } from '../../services/task-mgmt.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  public addTaskForm : FormGroup;
  public taskStatuses : string[];
  targetDateConfig : any = { min : new Date()};
  addingInProgress : boolean = false;
  isAddForm : boolean = true;

  constructor
  (
    private messageService : MessageService
    , private router : Router
    , private fb : FormBuilder
    , private taskService : TaskMgmtService
    , private currentUrl : ActivatedRoute
  ) 
  {
    this.addTaskForm = this.generateForm(new TaskViewModel()); 
  }
  
  addTask()
  {
    let taskToAdd = this.addTaskForm.value as TaskViewModel;
    this.addingInProgress = true;
    this.taskService.addTask(taskToAdd).subscribe
    (
      success => {
        this.addingInProgress = false;
        this.messageService.msg('Added successfully');
        this.addTaskForm.reset();
        this.router.navigate(['']);
      },
      err => {
        this.messageService.msg(err);
      }
    );
    
  }

  updateTask()
  {
    let taskData = this.addTaskForm.value;
    this.taskService.updateTask(taskData).subscribe
    (
      success => {
        this.messageService.msg('Updated successfully');
        this.addTaskForm.reset();
        this.router.navigate(['']);
      }
      , error => {
        console.log(error);
      }
    );
  }

  generateForm(taskViewmodel : TaskViewModel) : FormGroup
  {
    let form = this.fb.group
    ({
      title : [taskViewmodel.title, Validators.required],
      description : [taskViewmodel.description, Validators.required],
      targetDate : [ new Date(taskViewmodel.targetDate), Validators.required],
    });   
    return form;
  }

  getTaskData(taskId) {
    this.taskService.getTask(taskId).subscribe
      (
        success => 
        {
          let details = success.data;
          this.addTaskForm = this.generateForm(details as TaskViewModel);
        },
        error => 
        {
          console.log(error);
        }
      );
    
  }
  
  ngOnInit() 
  {
    let taskId = this.currentUrl.snapshot.paramMap.get('id');  
    if(!isUndefined(taskId))
    {
      this.isAddForm = false;
      this.getTaskData(taskId);
    }
    else 
    {
      this.generateForm(new TaskViewModel());
    }
    
  }

}

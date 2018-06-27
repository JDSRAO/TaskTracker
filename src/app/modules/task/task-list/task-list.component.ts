import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";
import { TaskViewModel } from '../_models/task-view-model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : TaskViewModel[] = [];
  constructor 
  (
    private router : Router
  ) { }

  goToAddPage()
  {
    this.router.navigate(['task/add']);
  }

  Get

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";
import { Task } from '../_models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : Task[] = [];
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

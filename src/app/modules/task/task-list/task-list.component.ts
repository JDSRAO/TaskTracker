import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  GoToAddPage()
  {
    this.router.navigate(['task/add']);
  }

}

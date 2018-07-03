import { Component, OnInit, ViewChild } from '@angular/core';
import { Router  } from "@angular/router";
import { TaskViewModel } from '../../index';

import { TaskMgmtService } from '../../services/task-mgmt.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : TaskViewModel[] = [];
  displayedColumns: string[] = [ 'title', 'description', 'createdDateTime'];

  dataSource: MatTableDataSource<TaskViewModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor 
  (
    private router : Router
    , private taskService : TaskMgmtService
  ) { }

  goToAddPage()
  {
    this.router.navigate(['task/add']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() 
  {
    this.dataSource = new MatTableDataSource(this.tasks);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.taskService.getTasks().subscribe
    (
      success => 
      {
        this.tasks = success.data;
        this.dataSource = new MatTableDataSource(this.tasks);
      },
      err =>
      {
        console.log(err);
      }
    );
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router  } from "@angular/router";
import { TaskViewModel } from '../../index';

import { TaskMgmtService } from '../../services/task-mgmt.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MessageService } from '../../../utils/public-apis';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : TaskViewModel[] = [];
  displayedColumns: string[] = [ 'title', 'description', 'createdDateTime', 'time', 'actions'];

  dataSource: MatTableDataSource<TaskViewModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor 
  (
    private router : Router
    , private taskService : TaskMgmtService
    , private messageService : MessageService
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

  startTask(taskId : string){
    this.taskService.startTask(taskId).subscribe
    (
      success => {
        this.getTasks();
      },
      err => {
        console.log(err);
      }
    );
  }

  pauseTask(taskId : string){
    this.taskService.pauseTask(taskId).subscribe
    (
      success => {
        this.getTasks();
      },
      err => {
        console.log(err);
      }
    );
  }

  goToEditPage(taskId : string){
    const url = "task/edit/" + taskId;
    this.router.navigate([url]);
  }

  deleteTask(taskId : string){
    let message = "Are you sure you want to delete?";
    let dialog = this.messageService.confirmation("",message).subscribe
    (
      result => {
        this.taskService.deleteTask(taskId).subscribe
        (
          success => {
            this.getTasks();
          },
          err => {
            console.log(err);
          }
        );
      },
      cancelled => {
        //this.messageService.msg("Cancelled");
      }
    );
    
  }

  closeTask(taskId : string){
    let dialog = this.messageService.confirmation("", "Are you sure you want to close task?").subscribe
    (
      result => {
        this.taskService.closeTask(taskId).subscribe
        (
          success => {
            this.getTasks();
          },
          err => {
            console.log(err);
          }
        );
      },
      cancelled => {
        //this.messageService.msg("Cancelled");
      }
    );
    
  }

  refreshTasks() {
    
    this.getTasks();
  }

  getTasks()
  {
    this.taskService.getTasks().subscribe
    (
      success => 
      {
        this.tasks = success.data;
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err =>
      {
        console.log(err);
      }
    );
  }

  ngOnInit() 
  {
    this.getTasks();
  }

}

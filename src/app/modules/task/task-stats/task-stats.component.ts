import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../_models/task';

@Component({
  selector: 'app-task-stats',
  templateUrl: './task-stats.component.html',
  styleUrls: ['./task-stats.component.css']
})
export class TaskStatsComponent implements OnInit {

  @Input()
  tasks : Task[];
  closedTasksCount : number = 0;
  constructor() { }

  ngOnInit() {
  }

}

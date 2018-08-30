import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { TaskViewModel } from '../../models/task-view-model';
import { TaskMgmtService } from '../../services/task-mgmt.service';

@Component({
  selector: 'app-task-stats',
  templateUrl: './task-stats.component.html',
  styleUrls: ['./task-stats.component.css']
})
export class TaskStatsComponent implements OnInit, DoCheck {

  ngDoCheck(): void {
    this.tasks.forEach(element => {
      //console.log(element);
    });
  }
  @Input()
  tasks : TaskViewModel[];
  closedTasksCount : number = 0;
  constructor(private taskService : TaskMgmtService ) { }

  getStats() 
  {
    this.taskService.getStats().subscribe
    (
      success => {
        //console.log(success.data);
        this.closedTasksCount = success.data.closed;
      }
    );
  }

  ngOnInit() {
    this.getStats()
  }

}

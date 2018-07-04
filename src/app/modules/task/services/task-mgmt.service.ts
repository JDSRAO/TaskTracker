import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings,  } from '../../../index';
import { TaskViewModel } from '..';

@Injectable()
export class TaskMgmtService {

  constructor(private http : HttpClient) { }

  baseApiName : string = "taskMgmt";

  addTask(task : TaskViewModel) : Observable<any>
  {
    let url = `${AppSettings.ApiBaseUrl}/${this.baseApiName}/add`;
    let body = task;
    return this.http.post<any>(url, body);
  }

  getTasks() : Observable<any>
  {
    let url : string = `${AppSettings.ApiBaseUrl}/${this.baseApiName}`;
    return this.http.get(url)
  }

  getTask(id : string) : Observable<any>
  {
    let url = `${AppSettings.ApiBaseUrl}/${this.baseApiName}/task`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  startTask(id : string) : Observable<any>
  {
    let url = `${AppSettings.ApiBaseUrl}/${this.baseApiName}/start`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  pauseTask(id : string) : Observable<any>
  {
    let url = `${AppSettings.ApiBaseUrl}/${this.baseApiName}/pause`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  closeTask(id : string) : Observable<any>
  {
    let url = `${AppSettings.ApiBaseUrl}/${this.baseApiName}/close`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  deleteTask(id : string) : Observable<any>
  {
    let url = `${AppSettings.ApiBaseUrl}/${this.baseApiName}/delete`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  getStats() : Observable<any>
  {
    let url = `${AppSettings.ApiBaseUrl}/${this.baseApiName}/stats`;
    return this.http.get(url);
  }

}

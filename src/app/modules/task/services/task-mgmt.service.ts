import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../../index';

@Injectable()
export class TaskMgmtService {

  constructor(private http : HttpClient) { }

  baseApiName : string = "taskMgmt";

  addTask() : Observable<any>
  {
    let url = '';
    return this.http.post<any>(url, {});
  }

  getTasks() : Observable<any>
  {
    let url : string = `${AppSettings.ApiBaseUrl}/${this.baseApiName}`;
    return this.http.get(url)
  }

  getTask(id : number) : Observable<any>
  {
    let url = '';
    return this.http.put(url, {});
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskMgmtService {

  constructor(private http : HttpClient) { }

  addTask() : Observable<any>
  {
    let url = '';
    return this.http.post<any>(url, {});
  }

  getTasks() : Observable<any>
  {
    let url = '';
    return this.http.get(url)
  }

  getTask(id : number) : Observable<any>
  {
    let url = '';
    return this.http.put(url, {});
  }

}

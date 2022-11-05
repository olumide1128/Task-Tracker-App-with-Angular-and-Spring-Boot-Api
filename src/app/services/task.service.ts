import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Task} from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://tasktrackerapi-env-2.eba-wkujubjt.eu-west-1.elasticbeanstalk.com/api/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  postTask(task: Task): Observable<Task>{
    const url = this.apiUrl;
    return this.http.post<Task>(url, task, httpOptions);
  }
}

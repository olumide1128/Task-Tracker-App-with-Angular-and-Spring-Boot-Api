import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
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

  private apiUrl = 'https://task-tracker-app-01.herokuapp.com/api/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    this.http.delete<Task>(url);
    return of(task);

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

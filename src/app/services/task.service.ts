import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'

const headerOption ={headers:new HttpHeaders({'Content-Type':'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  
  url ='http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.url); 
  }

  deleteTask(task: Task) :Observable<Task>{
    return this.http.delete<Task>(`${this.url}/${task.id}`)
    
  }
  updateReminder(task: Task):Observable<Task> {
    return this.http.put<Task>(`${this.url}/${task.id}`,task,headerOption);
  }
  addTask(task: Task):Observable<Task> {
    return this.http.post<Task>(this.url,task,headerOption);
  }
}

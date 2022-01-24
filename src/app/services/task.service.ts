import { Injectable } from '@angular/core';
import {Tasks} from '../mock-tasks';
import { Task } from '../Task';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks :Task[] =[];

  constructor() { }
  getTasks():Observable<Task[]>{
    this.tasks = Tasks;
    return of(this.tasks);
  }
}

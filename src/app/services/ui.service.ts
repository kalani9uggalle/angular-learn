import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
  private AddTaskValue!: boolean;
  private showTaskValue!:boolean;
  private subject_add =new Subject <any>();
  private subject_show=new Subject<any>();

  constructor() { }

  ToggleAddTask() {
    this.AddTaskValue=! this.AddTaskValue;
    this.subject_add .next(this.AddTaskValue);
  }

  showAddTask():Observable<any>{
    return this.subject_add .asObservable();
  }
  
  ToggleShowTask() {
    this.showTaskValue=! this.showTaskValue;
    this.subject_show.next(this.showTaskValue);
  }

  showTasks():Observable<any>{
    return this.subject_show .asObservable();
  }
  
  
}

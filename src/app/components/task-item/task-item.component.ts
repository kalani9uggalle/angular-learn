import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


 
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() OndeleteTask= new EventEmitter();
  @Output() OnToggleReminderTask= new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  clickDelete(deleteTask:Task):void{
    
    this.OndeleteTask.emit(deleteTask);
    
  }
  ToggleReminder(Toggletask:Task){
    
    this.OnToggleReminderTask.emit(Toggletask);


  }
}

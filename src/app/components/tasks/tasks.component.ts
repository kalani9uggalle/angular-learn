import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]=[];
  showTasks!: boolean;

  constructor(private taskservice:TaskService,private uiservice:UiService) {
      const subscription:Subscription=this.uiservice.showTasks().subscribe((value)=>this.showTasks=value)
   }

  ngOnInit(): void {
    this.taskservice.getTasks()
    .subscribe((input)=>this.tasks=input);
  }

  deleteTask(xtask:Task){
    this.taskservice.deleteTask(xtask).subscribe(() => {this.tasks=this.tasks.filter((t)=>(t.id!=xtask.id))});

  }
  ToggleReminderTask(task:Task){
    task.reminder=!task.reminder;
    this.taskservice.updateReminder(task).subscribe();

  }
  AddTask(task:Task){
    this.taskservice.addTask(task).subscribe((data)=>{this.tasks.push(data)} );

  }
}

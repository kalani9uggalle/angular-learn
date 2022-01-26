import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task!: string;
  day :string | undefined;
  reminder :boolean=false;

  ToggleForm!: boolean;
  private subscription!: Subscription;

  @Output() OnAddTask= new EventEmitter();

  constructor(private uiservice:UiService) {
    this.subscription=this.uiservice.showAddTask().subscribe((value)=>this.ToggleForm=value)

   }

  ngOnInit(): void {
  }
  saveTask(){
    if (!this.task) {
      alert('Input a task')
      return
    }
    const outTask  ={
      text:this.task,
      day :this.day,
      reminder:this.reminder
    }
    this.OnAddTask.emit(outTask);
    this.task='';
    this.day='';
    this.reminder=false;
  }
}

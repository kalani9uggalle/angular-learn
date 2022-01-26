import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  addTaskValue!: boolean;//private didn't work
  showTaskValue!:boolean;

  constructor(private uiservice:UiService,private router:Router) {
    const subscription:Subscription = this.uiservice.showAddTask().subscribe((value)=>this.addTaskValue=value)
    const subscription_tasks:Subscription=this.uiservice.showTasks().subscribe((value)=>this.showTaskValue=value)
  }

  ngOnInit(): void {
  }
  ToggleAddTAsk(){
    this.uiservice.ToggleAddTask()
  }
  ToggleShowTask(){
    this.uiservice.ToggleShowTask()
  }
  hasRoute(route:string){
    return this.router.url===route;

  }
}

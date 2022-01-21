import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() button_text:string | undefined;
  @Input() color:string | undefined;
  @Output() Check_click = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  Clicked(){
    this.Check_click.emit();
  }

}

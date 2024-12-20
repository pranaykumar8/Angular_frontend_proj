import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() p

@Output() data=new EventEmitter();
result="this message is child to parent";
posmsg (){
  this.data.emit(this.result)
}

}

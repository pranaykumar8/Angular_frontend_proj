import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
send(eventname){
  console.log(eventname);
}
// ondbclick(submitname){
//   console.log(submitname);
// }
}
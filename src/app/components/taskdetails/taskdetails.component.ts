import { Component } from '@angular/core';
import { CourseserviceService } from 'src/app/services/courseservice.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent {
  // courses = [
  //   { name: 'Intro to Python', duration: '6 weeks', level: 'Beginner', instructor: 'John Doe' },
  //   { name: 'Advanced JavaScript', duration: '8 weeks', level: 'Advanced', instructor: 'Jane Smith' },
  //   { name: 'Web Development Bootcamp', duration: '12 weeks', level: 'Intermediate', instructor: 'Emily Johnson' },
  //   { name: 'Data Structures and Algorithms', duration: '10 weeks', level: 'Advanced', instructor: 'Michael Brown' }
  // ];
  constructor(private _courseservice:CourseserviceService)
  {
  
  }
  courses=this._courseservice.getcourse();
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseserviceService } from 'src/app/services/courseservice.service';

@Component({
  selector: 'app-taskcourse',
  templateUrl: './taskcourse.component.html',
  styleUrls: ['./taskcourse.component.css']
})
export class TaskcourseComponent {
  // courses = [
  //   { name: 'Intro to Python', duration: '6 weeks', level: 'Beginner', instructor: 'John Doe' },
  //   { name: 'Advanced JavaScript', duration: '8 weeks', level: 'Advanced', instructor: 'Jane Smith' },
  //   { name: 'Web Development Bootcamp', duration: '12 weeks', level: 'Intermediate', instructor: 'Emily Johnson' },
  //   { name: 'Data Structures and Algorithms', duration: '10 weeks', level: 'Advanced', instructor: 'Michael Brown' }
  // ];
  // course();
  constructor(private _courseservice:CourseserviceService, private _router:Router)
  {
  
  }
  
  courses=this._courseservice.getcourse();
  redirectToCourse(id)
  {
    this._router.navigate(['selectedcourse/',id.name])
  }


  // ngOnInit(){
  //   this.course=this._courseservice.getcourse();
  //   this.course=this.course.filter(c=>c.id=1);
  // }
  
  }


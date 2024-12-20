import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseserviceService } from '../../services/courseservice.service';

@Component({
  selector: 'app-selectedcourse',
  templateUrl: './selectedcourse.component.html',
  styleUrls: ['./selectedcourse.component.css']
})
export class SelectedcourseComponent {
  courseData;
  courseId;
  constructor(private _courseService1: CourseserviceService,
              private __activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.courseData = this._courseService1.getcourse();
    //this._router.navigate(['selectedcourse/', this.courseData.courseId]);
    this.courseId = this.__activatedRoute.snapshot.paramMap.get('id');
  }

}



// constructor(private _activatedRoute: ActivatedRoute,private _router:Router,
//   private _courseService:CourseserviceService){}
//   this.courseData=this._courseService.getcourse();

// ngOnInit(){
//   //this.courseId=this._activatedRoute.snapshot.paramMap.get('id')// route parameters
//   this._router.navigate(['selectedcourse/'],this.courseData.id);
// }
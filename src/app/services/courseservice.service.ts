import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor() { }
      getcourse(){
      return[
          { name: 'Intro to Python', duration: '6 weeks', level: 'Beginner', instructor: 'John Doe' },
          { name: 'Advanced JavaScript', duration: '8 weeks', level: 'Advanced', instructor: 'Jane Smith' },
          { name: 'Web Development Bootcamp', duration: '12 weeks', level: 'Intermediate', instructor: 'Emily Johnson' },
          { name: 'Data Structures and Algorithms', duration: '10 weeks', level: 'Advanced', instructor: 'Michael Brown' },
          { name: 'Git', duration: '10 days', level: 'tool', instructor: 'Michael Brown' }

        ];
      
    }

  
}

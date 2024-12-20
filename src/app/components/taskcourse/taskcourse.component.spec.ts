import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcourseComponent } from './taskcourse.component';

describe('TaskcourseComponent', () => {
  let component: TaskcourseComponent;
  let fixture: ComponentFixture<TaskcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskcourseComponent]
    });
    fixture = TestBed.createComponent(TaskcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

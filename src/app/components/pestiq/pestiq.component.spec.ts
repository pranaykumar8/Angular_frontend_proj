import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestiqComponent } from './pestiq.component';

describe('PestiqComponent', () => {
  let component: PestiqComponent;
  let fixture: ComponentFixture<PestiqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PestiqComponent]
    });
    fixture = TestBed.createComponent(PestiqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybinddingComponent } from './propertybindding.component';

describe('PropertybinddingComponent', () => {
  let component: PropertybinddingComponent;
  let fixture: ComponentFixture<PropertybinddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertybinddingComponent]
    });
    fixture = TestBed.createComponent(PropertybinddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

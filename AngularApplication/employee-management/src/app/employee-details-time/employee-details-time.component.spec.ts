import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsTimeComponent } from './employee-details-time.component';

describe('EmployeeDetailsTimeComponent', () => {
  let component: EmployeeDetailsTimeComponent;
  let fixture: ComponentFixture<EmployeeDetailsTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsApiComponent } from './emp-details-api.component';

describe('EmpDetailsApiComponent', () => {
  let component: EmpDetailsApiComponent;
  let fixture: ComponentFixture<EmpDetailsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDetailsApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDetailsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

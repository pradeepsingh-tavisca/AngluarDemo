import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTimeComponent } from './latest-time.component';

describe('LatestTimeComponent', () => {
  let component: LatestTimeComponent;
  let fixture: ComponentFixture<LatestTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

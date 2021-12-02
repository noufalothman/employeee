import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePage } from './employeepage.component';

describe('EmployeepageComponent', () => {
  let component: EmployeePage;
  let fixture: ComponentFixture<EmployeePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

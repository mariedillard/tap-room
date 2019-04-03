import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRoomComponent } from './employee-room.component';

describe('EmployeeRoomComponent', () => {
  let component: EmployeeRoomComponent;
  let fixture: ComponentFixture<EmployeeRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

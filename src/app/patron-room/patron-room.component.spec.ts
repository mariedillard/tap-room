import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronRoomComponent } from './patron-room.component';

describe('PatronRoomComponent', () => {
  let component: PatronRoomComponent;
  let fixture: ComponentFixture<PatronRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatronRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

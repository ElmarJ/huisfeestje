import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoChatRoomComponent } from './video-chat-room.component';

describe('VideoChatRoomComponent', () => {
  let component: VideoChatRoomComponent;
  let fixture: ComponentFixture<VideoChatRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoChatRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDescriptionViewerComponent } from './room-description-viewer.component';

describe('RoomDescriptionViewerComponent', () => {
  let component: RoomDescriptionViewerComponent;
  let fixture: ComponentFixture<RoomDescriptionViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDescriptionViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDescriptionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

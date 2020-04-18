import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoordeurComponent } from './voordeur.component';

describe('VoordeurComponent', () => {
  let component: VoordeurComponent;
  let fixture: ComponentFixture<VoordeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoordeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoordeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RanglijstComponent } from './ranglijst.component';

describe('RanglijstComponent', () => {
  let component: RanglijstComponent;
  let fixture: ComponentFixture<RanglijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RanglijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RanglijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeurDichtComponent } from './deur-dicht.component';

describe('DeurDichtComponent', () => {
  let component: DeurDichtComponent;
  let fixture: ComponentFixture<DeurDichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeurDichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeurDichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

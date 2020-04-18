import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdrachtenOverzichtComponent } from './opdrachten-overzicht.component';

describe('OpdrachtenOverzichtComponent', () => {
  let component: OpdrachtenOverzichtComponent;
  let fixture: ComponentFixture<OpdrachtenOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdrachtenOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdrachtenOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

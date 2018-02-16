import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesAndEventsComponent } from './races-and-events.component';

describe('RacesAndEventsComponent', () => {
  let component: RacesAndEventsComponent;
  let fixture: ComponentFixture<RacesAndEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesAndEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

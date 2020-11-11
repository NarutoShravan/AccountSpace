import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItrackerComponent } from './itracker.component';

describe('ItrackerComponent', () => {
  let component: ItrackerComponent;
  let fixture: ComponentFixture<ItrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

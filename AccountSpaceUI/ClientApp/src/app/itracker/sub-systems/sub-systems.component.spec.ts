import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSystemsComponent } from './sub-systems.component';

describe('SubSystemsComponent', () => {
  let component: SubSystemsComponent;
  let fixture: ComponentFixture<SubSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

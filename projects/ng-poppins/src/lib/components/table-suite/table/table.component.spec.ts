import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgPopTableComponent} from './table.component';

describe('NgPopTableComponent', () =>
{
  let component: NgPopTableComponent;
  let fixture: ComponentFixture<NgPopTableComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [NgPopTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(NgPopTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});

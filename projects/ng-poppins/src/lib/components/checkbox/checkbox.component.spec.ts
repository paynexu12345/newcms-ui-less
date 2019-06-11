import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgPopCheckboxComponent} from './checkbox.component';

describe('NgPopCheckboxComponent', () =>
{
  let component: NgPopCheckboxComponent;
  let fixture: ComponentFixture<NgPopCheckboxComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [NgPopCheckboxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(NgPopCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});

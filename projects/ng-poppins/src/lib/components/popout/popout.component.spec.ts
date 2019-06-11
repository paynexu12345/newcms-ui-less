import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgPopPopoutComponent} from './popout.component';

describe('NgPopPopoutComponent', () =>
{
  let component: NgPopPopoutComponent;
  let fixture: ComponentFixture<NgPopPopoutComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [NgPopPopoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(NgPopPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});

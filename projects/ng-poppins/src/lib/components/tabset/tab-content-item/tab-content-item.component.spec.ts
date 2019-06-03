import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPopTabContentItemComponent } from './tab-content-item.component';

describe('TabContentItemComponent', () => {
  let component: NgPopTabContentItemComponent;
  let fixture: ComponentFixture<NgPopTabContentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPopTabContentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPopTabContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

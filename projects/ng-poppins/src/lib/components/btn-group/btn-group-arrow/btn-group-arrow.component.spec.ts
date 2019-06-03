import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGroupArrowComponent } from './btn-group-arrow.component';

describe('BtnGroupArrowComponent', () => {
  let component: BtnGroupArrowComponent;
  let fixture: ComponentFixture<BtnGroupArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGroupArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGroupArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

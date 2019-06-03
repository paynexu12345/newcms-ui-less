import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGroupDropdownComponent } from './btn-group-dropdown.component';

describe('BtnGroupDropdownComponent', () => {
  let component: BtnGroupDropdownComponent;
  let fixture: ComponentFixture<BtnGroupDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGroupDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGroupDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

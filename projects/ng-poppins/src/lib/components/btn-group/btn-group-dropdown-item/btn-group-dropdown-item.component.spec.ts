import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGroupDropdownItemComponent } from './btn-group-dropdown-item.component';

describe('BtnGroupDropdownItemComponent', () => {
  let component: BtnGroupDropdownItemComponent;
  let fixture: ComponentFixture<BtnGroupDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGroupDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGroupDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

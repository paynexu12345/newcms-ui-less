import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDropdownItemComponent } from './select-dropdown-item.component';

describe('SelectDropdownItemComponent', () => {
  let component: SelectDropdownItemComponent;
  let fixture: ComponentFixture<SelectDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

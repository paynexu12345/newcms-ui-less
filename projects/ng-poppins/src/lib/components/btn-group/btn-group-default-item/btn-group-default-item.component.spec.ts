import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGroupDefaultItemComponent } from './btn-group-default-item.component';

describe('BtnGroupDefaultItemComponent', () => {
  let component: BtnGroupDefaultItemComponent;
  let fixture: ComponentFixture<BtnGroupDefaultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGroupDefaultItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGroupDefaultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

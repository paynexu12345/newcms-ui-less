import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFlagComponent } from './tab-flag.component';

describe('TabFlagComponent', () => {
  let component: TabFlagComponent;
  let fixture: ComponentFixture<TabFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

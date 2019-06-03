import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSuiteComponent } from './table-suite.component';

describe('TableSuiteComponent', () => {
  let component: TableSuiteComponent;
  let fixture: ComponentFixture<TableSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

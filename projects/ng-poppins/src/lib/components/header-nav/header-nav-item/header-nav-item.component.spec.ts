import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsHeaderNavItemComponent } from './cms-header-nav-item.component';

describe('CmsHeaderNavItemComponent', () => {
  let component: CmsHeaderNavItemComponent;
  let fixture: ComponentFixture<CmsHeaderNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsHeaderNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsHeaderNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

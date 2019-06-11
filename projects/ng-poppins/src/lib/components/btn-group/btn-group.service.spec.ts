import { TestBed } from '@angular/core/testing';

import { BtnGroupService } from './btn-group.service';

describe('BtnGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BtnGroupService = TestBed.get(BtnGroupService);
    expect(service).toBeTruthy();
  });
});

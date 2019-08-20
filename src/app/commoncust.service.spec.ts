import { TestBed } from '@angular/core/testing';

import { CommoncustService } from './commoncust.service';

describe('CommoncustService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommoncustService = TestBed.get(CommoncustService);
    expect(service).toBeTruthy();
  });
});

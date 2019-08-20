import { TestBed } from '@angular/core/testing';

import { CommoncartService } from './commoncart.service';

describe('CommoncartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommoncartService = TestBed.get(CommoncartService);
    expect(service).toBeTruthy();
  });
});

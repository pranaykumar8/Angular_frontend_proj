import { TestBed } from '@angular/core/testing';

import { PestiqService } from './pestiq.service';

describe('PestiqService', () => {
  let service: PestiqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PestiqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

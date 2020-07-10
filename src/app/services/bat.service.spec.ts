import { TestBed } from '@angular/core/testing';

import { BatService } from './bat.service';

describe('BatService', () => {
  let service: BatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

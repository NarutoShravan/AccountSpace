import { TestBed } from '@angular/core/testing';

import { ItrackerDataService } from './itracker-data.service';

describe('ItrackerDataService', () => {
  let service: ItrackerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItrackerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

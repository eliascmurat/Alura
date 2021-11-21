import { TestBed } from '@angular/core/testing';

import { PlatformDetectorService } from './platform-detector.service';

describe('PlatformDetectorService', () => {
  let service: PlatformDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServerLogService } from './server-log.service';

describe('ServerLogService', () => {
  let service: ServerLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

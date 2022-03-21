import { TestBed } from '@angular/core/testing';

import { RoutingControlService } from './routing-control.service';

describe('RoutingControlService', () => {
  let service: RoutingControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

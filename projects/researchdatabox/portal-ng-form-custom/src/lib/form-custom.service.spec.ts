import { TestBed } from '@angular/core/testing';

import { PortalNgFormCustomService } from './form-custom.service';

describe('PortalNgFormCustomService', () => {
  let service: PortalNgFormCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalNgFormCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

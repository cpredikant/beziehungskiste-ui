import { TestBed } from '@angular/core/testing';

import { ArbeitgeberService } from './arbeitgeber.service';

describe('ArbeitgeberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArbeitgeberService = TestBed.get(ArbeitgeberService);
    expect(service).toBeTruthy();
  });

});

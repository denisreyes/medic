import { TestBed } from '@angular/core/testing';

import { EspacioService } from './espacio.service';

describe('EspacioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspacioService = TestBed.get(EspacioService);
    expect(service).toBeTruthy();
  });
});

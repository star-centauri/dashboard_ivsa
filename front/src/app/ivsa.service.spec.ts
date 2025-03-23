import { TestBed } from '@angular/core/testing';

import { IvsaService } from './ivsa.service';

describe('IvsaService', () => {
  let service: IvsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IvsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

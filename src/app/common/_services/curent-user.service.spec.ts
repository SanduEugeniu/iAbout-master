import { TestBed } from '@angular/core/testing';

import { CurentUserService } from './curent-user.service';

describe('CurentUserService', () => {
  let service: CurentUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurentUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

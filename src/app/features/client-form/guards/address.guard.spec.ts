import { TestBed } from '@angular/core/testing';

import { AddressGuard } from './address.service';

describe('AddressGuardGuard', () => {
  let guard: AddressGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddressGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

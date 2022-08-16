import { TestBed } from '@angular/core/testing';

import { CreatedClientGuard } from './created-client.guard';

describe('CreatedClientGuard', () => {
  let guard: CreatedClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreatedClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ValidProductGuard } from './valid-product.guard';

describe('ValidProductGuard', () => {
  let guard: ValidProductGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidProductGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

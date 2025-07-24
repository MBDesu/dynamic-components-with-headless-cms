import { TestBed } from '@angular/core/testing';

import { CardBuilder } from './card-builder';

describe('CardBuilder', () => {
  let service: CardBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

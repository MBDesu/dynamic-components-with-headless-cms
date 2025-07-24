import { TestBed } from '@angular/core/testing';

import { ComponentBuilder } from './component-builder';

describe('ComponentBuilder', () => {
  let service: ComponentBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { RequestHandler } from './search.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestHandler]
    });
  });

  it('should be created', inject([RequestHandler], (service: RequestHandler) => {
    expect(service).toBeTruthy();
  }));
});

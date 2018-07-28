import { TestBed, inject } from '@angular/core/testing';

import { AnimesService } from './animes.service';

describe('AnimesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimesService]
    });
  });

  it('should be created', inject([AnimesService], (service: AnimesService) => {
    expect(service).toBeTruthy();
  }));
});

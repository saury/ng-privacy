import { TestBed, inject } from '@angular/core/testing';

import { UrlParamsService } from './url-params.service';

describe('UrlParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlParamsService]
    });
  });

  it('should be created', inject([UrlParamsService], (service: UrlParamsService) => {
    expect(service).toBeTruthy();
  }));
});

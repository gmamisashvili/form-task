import { TestBed } from '@angular/core/testing';

import { CountriesAndCitiesService } from './countries-and-cities.service';

describe('CountriesAndCitiesService', () => {
  let service: CountriesAndCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesAndCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

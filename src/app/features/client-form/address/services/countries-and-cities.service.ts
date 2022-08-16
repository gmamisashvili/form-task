import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

interface Root {
  error: boolean
  msg: string
  data: Daum[]
}

interface Daum {
  iso2: string
  iso3: string
  country: string
  cities: string[]
}


@Injectable({
  providedIn: 'root'
})

export class CountriesAndCitiesService {
  getCountriesAndCities(): Observable<Daum[]> {
    return this.http.get<Root>('https://countriesnow.space/api/v0.1/countries').pipe(map(payload => payload.data));
  }

  constructor(private readonly http: HttpClient) {
  }
}

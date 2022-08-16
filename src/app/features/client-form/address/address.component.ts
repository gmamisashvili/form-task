import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientFormService} from '../service/client-form.service';
import {AddressFormModel} from './entity/types';
import {CountriesAndCitiesService} from './services/countries-and-cities.service';
import {from, map, Observable, tap} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent {

  countriesAndCities$ = this.countriesAndCitiesService.getCountriesAndCities();

  addressForm: FormGroup = new FormGroup<AddressFormModel>({
    index: new FormControl(null),
    country: new FormControl(null, {
      validators: [Validators.required]
    }),
    area: new FormControl(null),
    city: new FormControl(null, {
      validators: [Validators.required]
    }),
    street: new FormControl(null),
    house: new FormControl(null)
  })
  cities$: Observable<string[]> = new Observable<string[]>();

  constructor(private readonly clientFormService: ClientFormService,
              private readonly router: Router,
              private readonly countriesAndCitiesService: CountriesAndCitiesService) {
  }

  onSubmit() {
    if (this.addressForm.valid) {
      this.clientFormService.setAddressFormData(this.addressForm.value);
      this.router.navigate(['/client-form/identity']).then()
    }
  }

  setCities(event: any) {
    if (event.target instanceof Element) {
      this.cities$ = this.countriesAndCities$.pipe(
        map(data => data.find(countries => countries.country === event.target.value).cities)
      )
    }

  };
}

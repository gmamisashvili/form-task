import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ClientFormService} from '../service/client-form.service';

@Injectable({
  providedIn: 'root'
})
export class IdentityGuard implements CanActivate {
  constructor(private readonly clientFormService: ClientFormService,
              private readonly router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.clientFormService.getAddressFormDataValue()) {
      return true
    }
    this.router.navigate(['/client-form']).then();
    return false
  }

}

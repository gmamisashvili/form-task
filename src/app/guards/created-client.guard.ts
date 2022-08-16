import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {ClientFormService} from '../features/client-form/service/client-form.service';

@Injectable({
  providedIn: 'root'
})
export class CreatedClientGuard implements CanActivate {
  constructor(private readonly clientFormService: ClientFormService,
              private readonly router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.clientFormService.getIdentityFormValue()) {
      return true;
    }

    this.router.navigate(['']).then();
    return false;
  }

}

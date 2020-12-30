import { Injectable } from '@angular/core';
import {AuthenticationService} from '../../simple-pages/login-page/_service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CurentUserService {
    constructor(private authService: AuthenticationService) {}
    user(): any {
      this.authService.currentUser.subscribe(v => {
    });
    }
}

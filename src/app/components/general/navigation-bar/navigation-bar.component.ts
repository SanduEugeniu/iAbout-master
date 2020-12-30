import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthenticationService} from '../../../simple-pages/login-page/_service/authentication.service';
import {CurentUserService} from "../../../common/_services/curent-user.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  auth = false;
  curentUser: any;
  constructor(private router: Router,
              private authS: AuthenticationService,
              private curentUserService: CurentUserService
  ) {
  }

  registrationAccount(): void {
    this.router.navigate(['/registration']);

  }

  loginAccount(): void {
    this.curentUserService.user();
    this.router.navigate(['/loggingIn']);

  }

  logautAccount(): void {
    this.authS.logout();
    this.router.navigate(['/']);

  }
  goDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    this.authS.currentUser.subscribe(v => {
   if (!v) {
     this.auth = false;

   }else {
     this.auth = v.success;
     this.curentUser = v.data.user;

   }
 });
  }

  goMyPosts(): void {
    this.router.navigate(['/dashboard/myPosts'] );
  }

  goMySettings(): void {
    this.router.navigate(['/dashboard/mySettings'] );
  }
}

// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {first} from 'rxjs/operators';
// import {NavigationBarComponent} from '../../../../components/general/navigation-bar/navigation-bar.component';
// import {ActivatedRoute, Router} from '@angular/router';
// import {RegistrationService} from '../../../../simple-pages/reg-pag/_service/registarion.service';
//
// @Component({
//   selector: 'app-my-settings',
//   templateUrl: './my-settings.component.html',
//   styleUrls: ['./my-settings.component.css']
// })
// export class MySettingsComponent implements OnInit {
//
//   mySettings: FormGroup;
//   loading = false;
//   submitted = false;
//   returnUrl: string;
//   error = '';
//   checked: boolean;
//
//   constructor(
//     private navBar: NavigationBarComponent,
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private registrationService: RegistrationService,
//   ) { }
//
//   ngOnInit(): any {
//     this.mySettings = this.formBuilder.group({
//       email: ['', Validators.required],
//       password: ['',  Validators.minLength(8)],
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required]
//     });
//
//     // get return url from route parameters or default to '/'
//     this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboard';
//   }
//
//     // convenience getter for easy access to form fields
//     // tslint:disable-next-line:typedef
//     get f() { return this.RegistrationForm.controls; }
//
//     onSubmit(): any {
//       this.submitted = true;
//
//       if (this.RegistrationForm.invalid) {
//         return;
//       }
//
//       this.loading = true;
//       this.registrationService.registration(this.f.email.value, this.f.firstName.value, this.f.lastName.value, this.f.password.value)
//         .pipe(first())
//         .subscribe(
//           data => {
//             if (data.success) {
//               console.log('sad');
//               this.router.navigate(['confirm-mail']);
//             }else {
//               this.error = data.data.message;
//               this.loading = false;
//             }
//           });
//     }
//
//     handleFileInput1(files: FileList): any {
//     const file = files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = onload;
//
//     function onload(): any {
//       this.imageBaseData1 = reader.result;
//       console.log(reader.result);
//
//     }
//
//     reader.onerror = onerror;
//
//     function onerror(error): any {
//       console.log('Error: ', error);
//     }
//   }
//
// }

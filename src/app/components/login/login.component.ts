import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { User } from '../../User';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
   })
export class LoginComponent implements OnInit {

  public submitted: boolean = false;

   model: User = { name: "admin", surname: "admin", email: "admin@gmail.com", password: "admin", plan: "Premium" }
   loginForm: FormGroup;
   message: string = "Please check your email and password";
   returnUrl: string;

   users: User[] = [];

   done: boolean = false;

   constructor(
      private dataService: DataService,
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService,
   ) { }

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

login() {
   // stop here if form is invalid
   if (this.loginForm.invalid) {
      return;
   }
   else {
     for (let i in this.users){
       if (this.f.email.value == this.users[i].email && this.f.password.value == this.users[i].password) {
         console.log("Login successful");
         //this.authService.authLogin(this.model);
         localStorage.setItem('isLoggedIn', "true");
         localStorage.setItem('token', this.f.email.value);
         this.router.navigate([this.returnUrl]);
         this.authService.done = true;
         this.authService.name = this.users[i].name;
         break;
       }
     }
    }
  }

     ngOnInit() {
        this.dataService.getUser().subscribe(
          data => {
            this.users = data as User[];
          }
        );
        this.loginForm = this.formBuilder.group({
           email: ['', Validators.required],
           password: ['', Validators.required]
        });
     this.returnUrl = '/content';
     this.authService.logout();
     }

}

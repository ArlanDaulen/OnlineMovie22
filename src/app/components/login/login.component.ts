import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {User} from '../../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) { }
  date: Date = new Date();
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

    user: User = new User();

    submit(user: User){
      this.dataService.postUser(user)
              .subscribe(
                (data: User) => {this.check(this.user, data)},
                error => console.log(error)
              );
    }

    check(user: User, data: User){
      if(user.email = data.email){
        console.log("Signed In!");
      }else{
        console.log("Error");
      }
    }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.loginForm.value);
  }
  ngOnInit(): void {
  }
}

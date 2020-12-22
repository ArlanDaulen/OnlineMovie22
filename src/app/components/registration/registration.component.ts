import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {User} from '../../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private dataService: DataService) { }

  date: Date = new Date();
  loginForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  Standard(){
    this.user.plan = "Standard";
  }

  Basic(){
    this.user.plan = "Basic";
  }

  Premium(){
    this.user.plan = "Premium";
  }

  user: User = new User();

  receivedUser: User;
  done: boolean = false;
  submit(user: User){
    this.dataService.postUser(user)
            .subscribe(
              (data: User) => {this.receivedUser = data; this.done = true; console.log('Signed up')},
              error => console.log(error)
            );
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.loginForm.value);
  }
}

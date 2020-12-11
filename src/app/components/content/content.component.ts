import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Movie} from '../../Movie';
import {User} from '../../User';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  menus = ['/Adventure', '/Action', '/Horror', '/Comedy', '/Detective', '/Cartoon', '/Dramas', '/Documentary', '/Family'];
  SearchMovie = '';
  name: string;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

  constructor(private dataService: DataService) {
  }

  user: User = new User();
  done: boolean = false;
  doneLog: boolean = true;

  submit(user: User){
    this.dataService.postUser(user)
            .subscribe(
              (data: User) => {this.checkUser(this.user, data); this.done = true; this.doneLog = false},
              error => console.log(error)
            );
  }

  checkUser(user: User, data: User){
    if(user.email = data.email){
      console.log("Signed In!");
    }else{
      console.log("Error");
    }
  }

  category: Movie [] = [];

  check(index) {
    switch (index) {
      case 0:
        this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data['Adventure']);
        break;
      case 1:
        this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data['Action']);
        break;
      case 2:
        this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data['Horror']);
        break;
      case 3:
        this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data['Comedy']);
        break;
      case 4:
        this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data['Detective']);
        break;
      case 5:
        this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data['Cartoon']);
        break;
      case 6:
        this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data['Dramas']);
        break;
      case 7:
        this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data['Documentary']);
        break;
      case 8:
        this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data['Family']);
        break;
      default:
        break;
    }
  }
    ngOnInit(): void {
      this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data["Adventure"]);
    }
  }

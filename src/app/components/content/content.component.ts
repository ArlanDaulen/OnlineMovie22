import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Movie} from '../../Movie';
import {User} from '../../User';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  id: string;

  menus = ['/Adventure', '/Action', '/Horror', '/Comedy', '/Detective', '/Cartoon', '/Dramas', '/Documentary', '/Family'];
  SearchMovie = '';

  constructor(
    private dataService: DataService,
    private router: Router,
    private authService: AuthService
  ) { }

   done: boolean = false;
   doneLog: boolean = true;

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

  logout(){
    console.log('logout');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onSelect(item){
    this.router.navigate(['/content', item.id]);
    this.dataService.movie = item;
  }

    ngOnInit(): void {
      this.dataService.getMovie().subscribe((data: Movie[]) => this.category = data["Adventure"]);
    }
  }

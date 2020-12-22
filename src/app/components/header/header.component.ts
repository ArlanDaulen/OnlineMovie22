import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Daflix';

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  logout(){
    console.log('logout');
    this.authService.logout();
    this.router.navigate(['/login']);
    this.authService.done = false;
  }

  ngOnInit(): void {
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Daflix';
  name = "User";

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
    this.name = this.authService.name;
  }
}

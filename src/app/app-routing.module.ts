import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import { ContentComponent } from './components/content/content.component';
import { AuthGuard } from './guards/auth.guard';
import { MovieComponent } from './components/movie/movie.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent, canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'content/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

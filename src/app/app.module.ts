import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContentComponent} from './components/content/content.component';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {SearchPipe} from './components/content/search.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieComponent } from './components/movie/movie.component';
import { DetailComponent } from './components/detail/detail.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SearchPipe,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

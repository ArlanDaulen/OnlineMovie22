import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContentComponent} from './components/content/content.component';
import {RouterModule, Routes} from '@angular/router';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {SearchPipe} from './components/content/search.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlanComponent} from './components/plan/plan.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';

const appRoutes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SearchPipe,
    PlanComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

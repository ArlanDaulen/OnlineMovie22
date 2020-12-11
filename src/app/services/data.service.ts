import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '..//User';
import {Movie} from '..//Movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  postUser(user: User){
    const body = {name: user.name, surname: user.surname, email: user.email, password: user.password, plan : user.plan};
    return this.http.post('http://localhost:3000/users', body);
  }

  getMovie() {
    return this.http.get('assets/db.json');
  }

  getUser(){
    return this.http.get('db.json');
  }
}

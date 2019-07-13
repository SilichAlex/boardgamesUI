import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from './user';


@Injectable()
export class RegistrationService {

  private readonly baseURL;

  constructor(private http: HttpClient) {
    this.baseURL = environment.baseURL;
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseURL + '/register/provider', JSON.stringify(user));
  }
}










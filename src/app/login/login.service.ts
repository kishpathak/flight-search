import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {environment} from '../../environments/environment';

@Injectable()
export class LoginService {

  private loginUrl = environment.API_URL + 'users/login';

  constructor(private http : Http) { }

  login(user) : Promise < any > {
    console.log(user);
    console.log(this.loginUrl);
    return this
      .http
      .post(this.loginUrl, user)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error : any) : Promise < any > {
    return Promise.reject(error.message || error);
  }
}

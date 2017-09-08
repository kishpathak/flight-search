import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {environment} from '../../environments/environment';

@Injectable()
export class RegisterService {

  private registerUrl = environment.API_URL + 'users/register';

  constructor(private http : Http) { }

  register(user) : Promise < any > {
    return this
      .http
      .post(this.registerUrl, user)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error : any) : Promise < any > {
    return Promise.reject(error.message || error);
  }
}

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

@Injectable()
export class AddflightService {

  private addflightUrl = environment.API_URL + 'flight';

  constructor(private http: Http) { }

  addFlight(flight): Promise<any> {
    return this
      .http
      .post(this.addflightUrl, flight)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

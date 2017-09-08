import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

@Injectable()
export class ViewflightService {

  private getallflightUrl = environment.API_URL + 'flight/getAllFlight';

  constructor(private http: Http) { }

  viewFlight(): Promise<any> {
    return this
      .http
      .get(this.getallflightUrl)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

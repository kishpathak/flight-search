import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

@Injectable()
export class SearchflightService {

  private addflightUrl = environment.API_URL + 'flight/getAllFlight';
  private getoriginUrl = environment.API_URL + 'flight/getAllOriginCity';
  private getdestinationUrl = environment.API_URL + 'flight/getAllDestinationCity';
  private getOneWaySearchUrl = environment.API_URL + 'flight/oneWay';
  private getReturnSearchUrl = environment.API_URL + 'flight/returnFlight';
  



  constructor(private http: Http) { }

  getOriginName(): Promise<any> {
    return this
      .http
      .get(this.getoriginUrl)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getDestinationName(): Promise<any> {
    return this
      .http
      .get(this.getdestinationUrl)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  searchOneWayFlights(onewayflight): Promise<any> {
    return this
      .http
      .post(this.getOneWaySearchUrl, onewayflight)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  
  searchReturnFlights(returnflight): Promise<any> {
    return this
      .http
      .post(this.getReturnSearchUrl, returnflight)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

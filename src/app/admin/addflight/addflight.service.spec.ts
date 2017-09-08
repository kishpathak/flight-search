/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddflightService } from './addflight.service';

describe('AddflightService', () => {
  
  it('should be Truthy', () => {
    let app = new AddflightService();
    expect(app).toBeTruthy();
  });

  it('should be Truthy', () => {
    let app = new AddflightService();
    expect(app.addFlight).toBeTruthy();
  });
});

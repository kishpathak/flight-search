/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewflightService } from './viewflight.service';

describe('ViewflightService', () => {

  it('should be Truthy', () => {
    let app = new ViewflightService();
    expect(app).toBeTruthy();
  });

  it('View flight url should be correct', () => {
    let app = new ViewflightService();
    expect(app.getallflightUrl).toContain('flight/getAllFlight');
  });
  it('should be Truthy', () => {
    let app = new ViewflightService();
    expect(app.viewFlight).toBeTruthy();
  });
});

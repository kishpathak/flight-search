/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddflightComponent } from './addflight.component';

describe('AddflightComponent', () => {
  
  it('should be Truthy', () => {
    let app = new AddflightComponent();
    expect(app).toBeTruthy();
  });

  it('Booked Seat must be 0', () => {
    let app = new AddflightComponent();
    expect(app.flight.booked_seat).toEqual('0');
  });

  it('Booked Seat must be 0', () => {
    let app = new AddflightComponent();
    expect(app.onAddFlight).toBeTruthy;
  });
});

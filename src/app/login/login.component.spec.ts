/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

  it('should be Truthy', () => {
    let app = new LoginComponent();
    expect(app).toBeTruthy();
  });

  it('Email Id initialize', () => {
    let app = new LoginComponent();
    expect(app.user.emailId).toEqual('');
  });

  it('password initialize', () => {
    let app = new LoginComponent();
    expect(app.user.password).toEqual('');
  });

  it('login method', () => {
    let app = new LoginComponent();
    app.user.emailId = 'kk@gmail.com';
    app.user.password = 'Keshav@10'
    expect(app.onLogin).toBeTruthy();
  });

});

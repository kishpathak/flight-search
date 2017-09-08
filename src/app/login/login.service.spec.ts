/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  
  it('should be Truthy', () => {
    let app = new LoginService();
    expect(app).toBeTruthy();
  });

  it('login url should be correct', () => {
    let app = new LoginService();
    expect(app.loginUrl).toContain('users/login');
  });

  it('login Method should be Truthy', () => {
    let app = new LoginService();
    expect(app.login).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  
  it('should be Truthy', () => {
    let app = new RegisterComponent();
    expect(app).toBeTruthy();
  });

  it('User Role must be user', () => {
    let app = new RegisterComponent();
    expect(app.user.role).toEqual('user');
  });

  it('onRegister Method should be Truthy', () => {
    let app = new RegisterComponent();
    expect(app.onRegister).toBeTruthy();
  });
});

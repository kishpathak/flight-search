/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  it('should be Truthy', () => {
    let app = new UserService();
    expect(app).toBeTruthy();
  });
});

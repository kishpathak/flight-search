/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should be Truthy', () => {
    let app = new AppComponent();
    expect(app).toBeTruthy();
  });
  it('should be title app works!', () => {
    let app = new AppComponent();
    expect(app.title).toEqual('app works!');
  });
});

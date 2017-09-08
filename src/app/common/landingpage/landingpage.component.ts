import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'landingpage',
  templateUrl: './landingpage.component.html'
})
export class LandingpageComponent implements OnInit {

  userName; role;

  ngOnInit() {
    this.userName = localStorage.getItem("USER_NAME")
    this.role = localStorage.getItem("ROLE")
  }

  constructor(private router: Router) { }

}

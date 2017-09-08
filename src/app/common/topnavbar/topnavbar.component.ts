import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

// declare var jQuery: any;

@Component({
  styles: [`
  .nav-header{
        height: 108px;
  }`],
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopnavbarComponent {

  userName; role;

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
  ngOnInit() {
    this.userName = localStorage.getItem("USER_NAME")
    this.role = localStorage.getItem("ROLE")
  }

  constructor(private router: Router, private toasterService: ToasterService) { }
  
  onLogout() {
    localStorage.removeItem("ROLE");
    localStorage.removeItem("USER_NAME");
    localStorage.removeItem("EMAIL_ID");
    this.router.navigate(['/login']);
    this.toasterService.pop("success", "Logged out Successfully", "");
  }
}

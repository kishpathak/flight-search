import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { LoginService } from "./login.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  user = {
    emailId: "",
    password: ""
  }
  constructor(private router: Router, private loginService: LoginService,
    private toasterService: ToasterService) { }

  onLogin() {
    if (this.user.emailId !== "" && this.user.password !== "") {
      this
        .loginService
        .login(this.user)
        .then(response => {
          console.log(response);
          if (response.status.code === "200") {
            console.log("Inside Login Component");
            this.toasterService.pop("success", "Logged in Successfully", "");
            localStorage.setItem("ROLE", response.data.user[0].role);
            localStorage.setItem("USER_NAME", response.data.user[0].name);
            localStorage.setItem("EMAIL_ID", response.data.user[0].emailId);
            if (response.data.user[0].role === "admin") {
              this.router.navigate(['/admin/home']);
            }
            else if (response.data.user[0].role === "user") {
              this.router.navigate(['/user/home']);
            } else {
              this.router.navigate(['/login']);
            }
          }
          else if (response.status.message === "Invalid User") {
            this.toasterService.pop("error", "Invalid User", "");
            //console.log(response.status.message);
          }
          else {
            console.log("User Role not defined :- ",response.status.code, response.data.user);
          }
        })
        .catch(err => {
          console.log("Error", err);
        })
    }

  }

  ngOnInit(): void { }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { RegisterService } from "./register.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  user = {
    name: "",
    emailId: "",
    role: "user",
    phone_number: "",
    password: ""
  }

  constructor(private router: Router, private registerService: RegisterService,
    private toasterService: ToasterService) { }

  onRegister() {

    if (this.user.emailId !== "" && this.user.password !== "") {
      this
        .registerService
        .register(this.user)
        .then(response => {
          console.log(response);
          if (response.status.message === "User signup successful.") {
            this.toasterService.pop("success", "Registered Successfully", "");
            this.router.navigate(['/user']);
          }
          else if (response.status.message === "User with this email id already exists.") {
            this.toasterService.pop("error", "Email Id already register", "");
            this.router.navigate(['/register']);
          }
          else {
            this.toasterService.pop("error", "Not Registered", "");
            this.router.navigate(['/login']);
          }
        })
        .catch(err => {
          console.log("Error", err);
        })
    }

  }

  ngOnInit(): void {
  }

}

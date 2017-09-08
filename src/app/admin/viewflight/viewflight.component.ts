import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { ViewflightService } from "./viewflight.service";

@Component({
  selector: 'viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css'],
  providers: [ViewflightService]
})
export class ViewflightComponent implements OnInit {
  flights = [];
  constructor(private router: Router, private viewflightService: ViewflightService,
    private toasterService: ToasterService) { }

  ngOnInit() {
    this
      .viewflightService
      .viewFlight()
      .then(response => {
        console.log(response);
        if (response.status.message === "Flight fetched Successful") {
          this.toasterService.pop("success", "Flight Fetched Successfully", "");
          this.flights = response.data.flight;
        }
        else {
          console.log(response.status.message);
          this.toasterService.pop("error", "Failed", "");
        }
      })
      .catch(err => {
        console.log("Error", err);
      })
  }

}

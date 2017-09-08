import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AddflightService } from "./addflight.service";

@Component({
  selector: 'addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css'],
  providers: [AddflightService]
})
export class AddflightComponent implements OnInit {

  flight = {
    name: "",
    origin_city: "",
    destination_city: "",
    total_seat: "",
    booked_seat: "0",
    price: "",
    departure_date: "",
    arrival_date: "",
    departure_time: "",
    arrival_time: ""
  }
  constructor(private router: Router, private addflightService: AddflightService,
    private toasterService: ToasterService) { }

  onAddFlight() {
    if (this.flight.name !== "" && this.flight.origin_city !== "" && this.flight.destination_city !== "" && this.flight.total_seat !== "" && this.flight.price !== "" && this.flight.departure_date !== "" && this.flight.arrival_date !== "" && this.flight.departure_time !== "" && this.flight.arrival_time !== "") {
      this
        .addflightService
        .addFlight(this.flight)
        .then(response => {
          console.log(response);
          if (response.status.message === "Flight Details Added Successful.") {
            this.toasterService.pop("success", "Flight Added Successfully", "");
            this.router.navigate(['/admin/viewflight']);
          }
          else if (response.status.message === "Flight with this name already exists.") {
            this.toasterService.pop("error", "Flight already exists", "");
          }
          else {
            console.log(response.status.message);
            this.toasterService.pop("error", "Failed", "");
          }
        })
        .catch(err => {
          console.log("Error", err);
        })
    } else{
      this.toasterService.pop("error","Failed","");
    }
  }
  ngOnInit(): void { }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { SearchflightService } from "./searchflight.service";

@Component({
  selector: 'searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css'],
  providers: [SearchflightService]
})
export class SearchflightComponent implements OnInit {
  flights = [];
  oneWayFlightsSlider = [];

  flights1 = [];
  returnFlightSlider = [];

  onGoingFlights = [];
  returnFlights = [];

  minOneWay = 0;
  maxOneWay = 0;
  minReturn = 0;
  maxReturn = 0;

  onGoingAndReturn = {};

  onewayflight = {
    origin_city: "",
    destination_city: "",
    departure_date: ""
  }

  returnflight = {
    origin_city: "",
    destination_city: "",
    departure_date: "",
    return_date: ""
  };

  origins = [];
  destinations = [];

  constructor(private router: Router, private searchflightService: SearchflightService,
    private toasterService: ToasterService) { }

  getOriginName() {
    this
      .searchflightService
      .getOriginName()
      .then(response => {
        // console.log(response);
        if (response.status.message === "Origin City Name fetched Successful") {
          // this.toasterService.pop("success", "Origin City Name Fetched Successfully", "");
          console.log(response);
          // var i = 0;
          // for(let on of response.data.origin) {
          //   console.log(on);
          //   this.origins.push(on);
          // }
          this.origins = response.data.origin;
          // console.log(this.origins);
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

  /// Slider Value here ///
  valRecOneWay() {
    let x = (<HTMLInputElement>document.getElementById('myRangeOneWay')).value;
    this.flights = [];
    for (let on of this.oneWayFlightsSlider) {
      if (on.price <= x) {
        this.flights.push(on);
      }
    }
    (<HTMLSpanElement>document.getElementById('maxOneWay')).innerHTML = " " + x;
  }

  valRecReturn() {
    let x = (<HTMLInputElement>document.getElementById('myRangeReturn')).value;
    this.flights1 = [];
    for (let on of this.returnFlightSlider) {
      if (on.price <= x) {
        this.flights1.push(on);
      }
    }
    (<HTMLSpanElement>document.getElementById('maxReturn')).innerHTML = " " + x;
  }
  //////

  clearReturn() {
    this.flights1 = [];
    (<HTMLSpanElement>document.getElementById('minReturn')).innerHTML = "";
    (<HTMLSpanElement>document.getElementById('maxReturn')).innerHTML = "";
    (<HTMLInputElement>document.getElementById('myRangeReturn')).min = "";
    (<HTMLInputElement>document.getElementById('myRangeReturn')).max = "";
    (<HTMLInputElement>document.getElementById('myRangeReturn')).value = "";
    (<HTMLDivElement>document.getElementById('returnSlider')).style.display = "none";
  }

  clearOneWay() {
    this.flights = [];
    (<HTMLSpanElement>document.getElementById('minOneWay')).innerHTML = "";
    (<HTMLSpanElement>document.getElementById('maxOneWay')).innerHTML = "";
    (<HTMLInputElement>document.getElementById('myRangeOneWay')).min = "";
    (<HTMLInputElement>document.getElementById('myRangeOneWay')).max = "";
    (<HTMLInputElement>document.getElementById('myRangeOneWay')).value = "";
    (<HTMLDivElement>document.getElementById('oneWaySlider')).style.display = "none";
  }

  getDestinationName() {
    this
      .searchflightService
      .getDestinationName()
      .then(response => {
        if (response.status.message === "Destination City Name fetched Successful") {
          this.destinations = response.data.destination;
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

  onOneway() {
    if (this.onewayflight.origin_city !== "" && this.onewayflight.destination_city !== "" && this.onewayflight.departure_date !== "") {
      this
        .searchflightService
        .searchOneWayFlights(this.onewayflight)
        .then(response => {
          if (response.status.message === "Flight fetched Successful") {
            // this.toasterService.pop("success", "Flight Fetched Successfully", "");
            this.flights = response.data.flight;
            this.oneWayFlightsSlider = this.flights;
            (<HTMLDivElement>document.getElementById('oneWaySlider')).style.display = "block";
            this.minOneWay = this.flights[0].price;
            for (let on of this.flights) {
              if (on.price > this.maxOneWay) {
                this.maxOneWay = on.price;
              } else if (on.price < this.minOneWay) {
                this.minOneWay = on.price;
              }
            }
            (<HTMLSpanElement>document.getElementById('minOneWay')).innerHTML = " " + this.minOneWay;
            (<HTMLSpanElement>document.getElementById('maxOneWay')).innerHTML = " " + this.maxOneWay;
            (<HTMLInputElement>document.getElementById('myRangeOneWay')).min = "" + this.minOneWay;
            (<HTMLInputElement>document.getElementById('myRangeOneWay')).max = "" + this.maxOneWay;
            (<HTMLInputElement>document.getElementById('myRangeOneWay')).value = "" + this.maxOneWay;
            this.flights1 = [];
            this.returnFlightSlider = [];
          }
          else {
            console.log(response.status.message);
            this.toasterService.pop("error", "Failed", "");
          }
        })
        .catch(err => {
          console.log("Error", err);
        })
    } else {
      this.toasterService.pop("error", "Failed", "");
    }
  }

  onReturn() {
    if (this.returnflight.origin_city !== "" && this.returnflight.destination_city !== "" && this.returnflight.departure_date !== "" && this.returnflight.return_date !== "") {
      this
        .searchflightService
        .searchReturnFlights(this.returnflight)
        .then(response => {
          if (response.status.message === "Flight fetched Successful") {
            // this.toasterService.pop("success", "Flight Fetched Successfully", "");
            this.flights = response.data.flight;
            this.onGoingFlights = this.flights[0];
            this.returnFlights = this.flights[1];
            this.flights = [];
            this.oneWayFlightsSlider = [];
            this.convertData();
          }
          else {
            console.log(response.status.message);
            this.toasterService.pop("error", "Failed", "");
          }
        })
        .catch(err => {
          console.log("Error", err);
        })
    } else {
      this.toasterService.pop("error", "Failed", "");
    }
  }

  convertData() {
    for (let on of this.onGoingFlights) {
      for (let ret of this.returnFlights) {
        this.onGoingAndReturn = {
          ongoing_flight_origin_city: on.origin_city,
          ongoing_flight_destination_city: on.destination_city,
          return_flight_origin_city: ret.origin_city,
          return_flight_destination_city: ret.destination_city,
          ongoing_flight_name: on.name,
          return_flight_name: ret.name,
          ongoing_flight_departure_date: on.departure_date,
          return_flight_departure_date: ret.departure_date,
          ongoing_flight_arrival_date: on.arrival_date,
          return_flight_arrival_date: ret.arrival_date,
          ongoing_flight_departure_time: on.departure_time,
          return_flight_departure_time: ret.departure_time,
          ongoing_flight_arrival_time: on.arrival_time,
          return_flight_arrival_time: ret.arrival_time,
          price: on.price + ret.price
        }
        this.flights1.push(this.onGoingAndReturn);
        this.onGoingAndReturn = {};
      }
    }
    this.returnFlightSlider = this.flights1;
    (<HTMLDivElement>document.getElementById('returnSlider')).style.display = "block";
    this.minReturn = this.flights1[0].price;
    for (let on of this.flights1) {
      if (on.price > this.maxReturn) {
        this.maxReturn = on.price;
      } else if (on.price < this.minReturn) {
        this.minReturn = on.price;
      }
    }
    (<HTMLSpanElement>document.getElementById('minReturn')).innerHTML = " " + this.minReturn;
    (<HTMLSpanElement>document.getElementById('maxReturn')).innerHTML = " " + this.maxReturn;
    (<HTMLInputElement>document.getElementById('myRangeReturn')).min = "" + this.minReturn;
    (<HTMLInputElement>document.getElementById('myRangeReturn')).max = "" + this.maxReturn;
    (<HTMLInputElement>document.getElementById('myRangeReturn')).value = "" + this.maxReturn;
  }

  ngOnInit() {
    this.getOriginName();
    this.getDestinationName();
  }

  plainValueChanged(event, container: any) {
    var el = this.getElement(container);
  }

  getElement(data) {
    if (typeof (data) == 'string') {
      return document.getElementById(data);
    }
    if (typeof (data) == 'object' && data instanceof Element) {
      return data;
    }
    return null;
  }

}

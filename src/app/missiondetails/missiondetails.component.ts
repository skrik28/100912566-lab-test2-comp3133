// src/app/missiondetails/missiondetails.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SpacexService } from '../spacex.service';
import { Mission } from '../mission';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission | undefined;
  isLoading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService,
    private location: Location, // Inject Location service
    private router: Router // Inject Router for navigation fallback
  ) {}

  ngOnInit(): void {
    this.getMissionDetails();
  }

  getMissionDetails(): void {
    this.isLoading = true;
    this.error = null;
    // Get flight number from route parameter (convert to number)
    const flightNumberParam = this.route.snapshot.paramMap.get('flight_number');

    if (!flightNumberParam) {
      this.error = 'Flight number not found in URL.';
      this.isLoading = false;
      console.error(this.error);
      // Optionally navigate back or to a not-found page
      // this.router.navigate(['/missions']);
      return;
    }

    const flightNumber = +flightNumberParam; // The '+' converts string to number

    if (isNaN(flightNumber)) {
        this.error = 'Invalid flight number provided in URL.';
        this.isLoading = false;
        console.error(this.error);
        return;
    }


    this.spacexService.getMissionByFlightNumber(flightNumber).subscribe({
      next: (data) => {
        this.mission = data;
        this.isLoading = false;
        console.log('Mission details loaded:', this.mission);
      },
      error: (err: HttpErrorResponse | Error) => {
         if (err instanceof HttpErrorResponse) {
            this.error = `Failed to load mission details: ${err.message}`;
         } else {
            this.error = `Failed to load mission details: ${err.message}`; // Handle non-HTTP errors (like mission not found from map operator)
         }
        this.isLoading = false;
        console.error(err);
      },
    });
  }

  // Function to go back to the previous page
  goBack(): void {
    this.location.back();
  }
}

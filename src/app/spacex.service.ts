// src/app/spacex.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Mission } from './mission'; // Import the interface
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  private REST_API_SERVER = 'https://api.spacexdata.com/v3';

  constructor(private httpClient: HttpClient) {}

  // Fetch all launches
  getMissions(): Observable<Mission[]> {
    const url = `${this.REST_API_SERVER}/launches`;
    console.log(`Fetching all missions from: ${url}`);
    return this.httpClient.get<Mission[]>(url).pipe(
      tap((data) => console.log(`Fetched ${data.length} missions`)),
      catchError(this.handleError)
    );
  }

  // Fetch launches filtered by year
  getMissionsByYear(year: string): Observable<Mission[]> {
    const url = `${this.REST_API_SERVER}/launches?launch_year=${year}`;
    console.log(`Fetching missions for year ${year} from: ${url}`);
    return this.httpClient.get<Mission[]>(url).pipe(
      tap((data) => console.log(`Fetched ${data.length} missions for ${year}`)),
      catchError(this.handleError)
    );
  }

  // Fetch a single mission by flight number
  getMissionByFlightNumber(flightNumber: number): Observable<Mission> {

    const url = `${this.REST_API_SERVER}/launches?flight_number=${flightNumber}`;
    console.log(`Fetching mission ${flightNumber} from: ${url}`);

    return this.httpClient.get<Mission[]>(url).pipe(
      tap((data) => console.log(`Fetched mission data:`, data)),

      map((missions) => {
        if (missions && missions.length > 0) {
          return missions[0];
        } else {
          // Throw an error if no mission is found for the flight number
          throw new Error(`Mission with flight number ${flightNumber} not found.`);
        }
      }),
      catchError(this.handleError)
    );
  }


  // Basic error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

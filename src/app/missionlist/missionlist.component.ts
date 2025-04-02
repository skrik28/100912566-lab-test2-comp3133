// src/app/missionlist/missionlist.component.ts
import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { Mission } from '../mission';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  isLoading: boolean = true;
  error: string | null = null;
  currentFilterYear: string = '';

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.isLoading = true;
    this.error = null;
    this.spacexService.getMissions().subscribe({
      next: (data) => {
        this.missions = data;
        this.filteredMissions = data; // Initially show all
        this.isLoading = false;
        console.log('All missions loaded:', this.missions);
      },
      error: (err: HttpErrorResponse) => {
        this.error = `Failed to load missions: ${err.message}`;
        this.isLoading = false;
        console.error(err);
      },
    });
  }

  filterMissionsByYear(year: string): void {
    this.currentFilterYear = year;
    this.isLoading = true;
    this.error = null;

    if (!year) {
      // If year is empty, show all missions (already loaded)
      this.filteredMissions = this.missions;
      this.isLoading = false;
      console.log('Filter cleared, showing all missions.');
      return;
    }

    this.spacexService.getMissionsByYear(year).subscribe({
      next: (data) => {
        this.filteredMissions = data;
        this.isLoading = false;
        console.log(`Filtered missions for year ${year}:`, this.filteredMissions);
      },
      error: (err: HttpErrorResponse) => {
        this.error = `Failed to load missions for year ${year}: ${err.message}`;
        this.filteredMissions = []; // Clear list on error
        this.isLoading = false;
        console.error(err);
      },
    });
  }
}

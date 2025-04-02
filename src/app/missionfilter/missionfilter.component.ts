// src/app/missionfilter/missionfilter.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<string>();
  selectedYear: string = '';

  applyFilter() {
    // Emit the selected year (even if it's empty)
    this.yearSelected.emit(this.selectedYear.trim());
  }

  clearFilter() {
    this.selectedYear = '';
    this.applyFilter(); // Emit empty string to show all
  }
}

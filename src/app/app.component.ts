// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // CommonModule, // Often needed for *ngIf, *ngFor etc. - Add if missing
    RouterModule, // <--- Add RouterModule here
    MatToolbarModule, // <--- Add MatToolbarModule here
    // Other necessary standalone components/modules used directly in app.component.html
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '100912566-lab-test2-comp3133';
  studentId = '100912566';
  currentYear = new Date().getFullYear();
}

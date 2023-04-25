import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {}

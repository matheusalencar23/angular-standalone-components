import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {}

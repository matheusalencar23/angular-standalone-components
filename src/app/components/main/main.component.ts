import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {}

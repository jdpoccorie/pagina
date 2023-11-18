import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule , HeaderComponent],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent {

}

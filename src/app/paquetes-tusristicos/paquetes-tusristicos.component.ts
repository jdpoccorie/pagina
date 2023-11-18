import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-paquetes-tusristicos',
  standalone: true,
  imports: [CommonModule , HeaderComponent],
  templateUrl: './paquetes-tusristicos.component.html',
  styleUrl: './paquetes-tusristicos.component.css'
})
export class PaquetesTusristicosComponent {

}

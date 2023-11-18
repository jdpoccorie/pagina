import { Component , EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // // eventos  
  // @Input() occupation = '';
  // // ahora para el hijo 
  // @Output() incrementCoutEvent = new EventEmitter<string>();
  
  // emitToParent():void{
  //   this.incrementCoutEvent.emit('Hola soy tu hijo');
  // }
  
}

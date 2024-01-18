import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  isMenuOpen = false;
  windowSize !: number;



  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateWindowSize();
  }

  private updateWindowSize(): void {
    this.windowSize = window.innerWidth;
  }

  // // eventos
  // @Input() occupation = '';
  // // ahora para el hijo
  // @Output() incrementCoutEvent = new EventEmitter<string>();

  // emitToParent():void{
  //   this.incrementCoutEvent.emit('Hola soy tu hijo');
  // }

}

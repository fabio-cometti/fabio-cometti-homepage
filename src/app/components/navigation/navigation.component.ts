import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, output, signal, ViewChild } from '@angular/core';
import { ScrollAnchorDirective } from 'src/app/directives/scroll-anchor.directive';
import { ExtraService } from 'src/app/services/extra.service';

@Component({
  selector: 'fc-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss'],
  standalone: true,
  exportAs: 'navMenu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,       
    ScrollAnchorDirective,
  ]  
})
export class NavigationComponent {
  showMenu = signal(false);  
  menuOpen = output<void>();

  @ViewChild('menuButton', { static: true })
  menuButton!: ElementRef<HTMLButtonElement>;

  constructor(public extraService: ExtraService){

  }

  toggleMenu(): void {
    this.showMenu.set(!this.showMenu());
    this.menuOpen.emit();    
  }

  closeMenu(menuVoice: number): void {
    this.showMenu.set(false);
    this.extraService.extraBehaviorSubject.next('' + menuVoice);
  }
}

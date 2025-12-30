import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavComponent, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

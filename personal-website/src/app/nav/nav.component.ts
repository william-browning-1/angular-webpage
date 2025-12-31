import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  menuItems = [
    { label: 'Home', icon: 'fa-home', link: '/' },
    { label: 'Education', icon: 'fa-book', link: '/education' },
    { label: 'Experience', icon: 'fa-laptop', link: '/experience' },
    { label: 'Contact', icon: 'fa-comments', link: '/contact' },
    { label: 'Docs', icon: 'fa-info', link: '/docs' }
  ];

  // logoutItem = {
  //   label: 'Logout',
  //   icon: 'fa-power-off',
  //   link: '/logout'
  // };
}

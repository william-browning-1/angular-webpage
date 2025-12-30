import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }

  toggleMenu(open: boolean) {
    document.body.classList.toggle('menu-open', !!open);
  }
}
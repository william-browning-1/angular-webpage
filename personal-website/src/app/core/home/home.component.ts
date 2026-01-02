import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  downloadResume() {
  const link = document.createElement('a');
  link.href = 'assets/wb.pdf';
  link.download = 'wb_resume.pdf';
  link.target = '_blank';
  link.click();
}
}

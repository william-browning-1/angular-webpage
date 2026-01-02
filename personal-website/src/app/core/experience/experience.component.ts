import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Experience, experiences } from './jobs';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = experiences;

  activeIndex = 0; // track which card is active
  setActive(index: number) {
    this.activeIndex = index;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COURSES } from './courses';
import { Category, WidgetComponent } from '../../shared/widget/widget.component';
import { Skill, SKILLS } from './skills';

@Component({
  selector: 'app-education',
  imports: [CommonModule, WidgetComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  skills: Skill[] = SKILLS;
  courses: Category[] = COURSES;
  activeFilter = 'all';

  get filteredCourses(): Category[] {
    if (this.activeFilter === 'all') return this.courses;
    return this.courses.filter(c => c.categoryKey === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
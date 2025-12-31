import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COURSES } from './courses';
import { Category, WidgetComponent } from '../../shared/widget/widget.component';

@Component({
  selector: 'app-education',
  imports: [CommonModule, WidgetComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
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
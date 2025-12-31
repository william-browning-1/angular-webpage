import { Component } from '@angular/core';
import { Input } from '@angular/core';


export interface Category {
  code: string;
  title: string;
  category: string;
  categoryKey: string;
  description: string;
  // add more if needed
}

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  @Input() category!: Category;

  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}

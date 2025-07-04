import {Component, input} from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css'
})
export class DashboardItem {
  image = input.required<{image: string, alt: string}>();
  title = input.required<string>()
}

import {Component, computed, inject} from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import {AuthService} from './auth/auth.service';
import {Auth} from './auth/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [AuthComponent, LearningResourcesComponent, Auth],
})
export class AppComponent {
}

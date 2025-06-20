import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Users} from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!: Users;
  @Input({required: true}) isSelected!: boolean;
  @Output() selected = new EventEmitter<string>();
  // selected = output<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  selectUser() {
    this.selected.emit(this.user.id);
  }
}

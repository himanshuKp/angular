import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CartComponent } from '../shared/cart/cart.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

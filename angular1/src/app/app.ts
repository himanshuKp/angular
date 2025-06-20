import {Component} from '@angular/core';
import {HeaderComponent} from './header/header';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-users';
import {Tasks} from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular1';
  users = DUMMY_USERS;
  selectedUser?: string;
  userId!: string;

  onSelectUser(id: string) {
    console.log("Selected user: " +id);
    this.userId = id;
    this.selectedUser = this.users.find(user => user.id === id)?.name || "";
  }
}

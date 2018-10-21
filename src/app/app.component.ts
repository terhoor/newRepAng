import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import {User} from './shared/user.model';

const LOCAL_USERS_KEY = 'users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentUser: User;
    users: User[];

    constructor() {
        this.users = JSON.parse(localStorage.getItem(LOCAL_USERS_KEY)) || [];
        this.currentUser = this.getCurrentUser();
    }

    getCurrentUser() {
        return new User(this.users.length);
    }

    addUser() {
        this.users.push(this.currentUser);
        this.currentUser = this.getCurrentUser();
        localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(this.users));
    }
}

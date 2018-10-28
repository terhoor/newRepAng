import { Component } from '@angular/core';
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
    lastDelete: User[] = [];
    countId: number;
    changeForm = false;
    numUserChange: number;


    constructor() {
        this.users = this.users = JSON.parse(localStorage.getItem(LOCAL_USERS_KEY)) || [];
        this.countId = this.getMaxId();
        this.currentUser = this.getCurrentUser();

    }

    getMaxId() {
        return this.users.reduce((max: number, next: User): number => {
            if (max < next.id) {
                return next.id;
            }
            return max;
        }, 0);
    }

    setDataLocalStorage(key, data): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    getCurrentUser() {
        return new User(++this.countId);
    }

    addUser() {
        this.changeForm = false;
        this.users.push(this.currentUser);
        this.currentUser = this.getCurrentUser();
        this.setDataLocalStorage(LOCAL_USERS_KEY, this.users);
    }

    deleteUser(num: number) {
        this.lastDelete.push(this.users[num]);
        this.users.splice(num, 1);
        this.setDataLocalStorage(LOCAL_USERS_KEY, this.users);
        this.getMaxId();
    }

    cancelDelete() {
        if (this.lastDelete.length) {
            this.users.push(this.lastDelete.pop());
        }
        this.setDataLocalStorage(LOCAL_USERS_KEY, this.users);
    }

    editUser(num: number) {
        this.changeForm = true;
        this.numUserChange = num;
        this.currentUser = Object.assign({}, this.users[num]);
    }

    userSave () {
        this.users.splice(this.numUserChange, 1, this.currentUser);
        this.currentUser = this.getCurrentUser();
        this.changeForm = false;

    }
}

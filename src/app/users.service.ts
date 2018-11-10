import {BehaviorSubject} from 'rxjs';

import {User} from './shared/user.model';
const LOCAL_USERS_KEY = 'users';

export class UsersService {

  currentUser;
  users: User[];
  lastDelete: User[] = [];
  countId: number;
  changeForm;
  numUserChange: number;

  constructor() {
    this.users = this.users = JSON.parse(localStorage.getItem(LOCAL_USERS_KEY)) || [];
    this.countId = this.getMaxId();
    this.currentUser = new BehaviorSubject<User>(this.getCurrentUser());
    this.currentUser.subscribe();

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
    this.changeForm.next(false);
    this.users.push(this.currentUser.getValue());
    this.currentUser.next(this.getCurrentUser());

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
    this.changeForm.next(true);
    this.numUserChange = num;
    this.currentUser = Object.assign({}, this.users[num]);
  }

  userSave () {
    this.users.splice(this.numUserChange, 1, this.currentUser);
    this.currentUser.next(this.getCurrentUser());
    this.changeForm.next(false);

  }
}

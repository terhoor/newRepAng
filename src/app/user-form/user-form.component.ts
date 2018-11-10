import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    changeForm: boolean;
    user: User;
    constructor(private usersService: UsersService) {
      this.user = this.usersService.currentUser;
    }

    ngOnInit() {
      this.usersService.changeForm.subscribe((val) => {
        this.changeForm = val;
      });
      this.usersService.currentUser.subscribe((val) => {
        this.user = val;
      });
    }


    addUser() {
      this.usersService.addUser();
      // this.user = this.usersService.currentUser;
    }

    userSave () {
      this.usersService.userSave();
      // this.user = this.usersService.currentUser;

    }
}

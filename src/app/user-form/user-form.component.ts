import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user.model';
import { UsersService } from '../users.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    changeForm: boolean;
    regForm: FormGroup;
    user: User;
    constructor(private usersService: UsersService) {

    }

    ngOnInit() {
      this.regForm = new FormGroup({
        lastName: new FormControl(''),
        firstName: new FormControl(''),
        surName: new FormControl('')
      });
      this.usersService.changeForm.subscribe((val) => {
        this.changeForm = val;
      });
      this.usersService.currentUser.subscribe((user) => {
        this.user = user;
        this.regForm.setValue({
          lastName: user.lastName,
          firstName: user.firstName,
          surName: user.surName
        });
      });
      this.regForm.valueChanges.subscribe(() => {
        this.user = Object.assign(this.user, this.regForm.value);
      });
    }


    addUser() {
      // this.usersService.currentUser.next(this.user);
      this.usersService.addUser();
      this.regForm.reset();
    }

    userSave () {
      // this.usersService.currentUser.next(this.user);
      this.usersService.userSave();


    }
}

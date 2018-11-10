import { Component, OnInit, Input } from '@angular/core';
import {User} from '../shared/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']

})
export class UserListComponent {
  @Input() users: User[];
  @Input() lastDelete: User[];

  constructor() {
  }

  checkCancel() {
    if (this.lastDelete.length !== 0) {
      return true;
    }
    return false;
  }

}

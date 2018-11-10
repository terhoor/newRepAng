import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
// import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-btn',
  templateUrl: './user-list-btn.component.html',
  styleUrls: ['./user-list-btn.component.css']
})
export class UserListBtnComponent {
  @Input() name: string;
  @Input() indexUser: number;
  @Input() flag: boolean;

  constructor(private usersService: UsersService) {
  }

  onDelLast() {
    const len: number = this.usersService.users.length;
    if (len > 0) {
      this.usersService.deleteUser(len - 1);
    }

  }

  onDelete() {
    this.usersService.deleteUser(this.indexUser);
  }

  onCancel() {
    this.usersService.cancelDelete();
  }

  onEdit() {
    this.usersService.editUser(this.indexUser);

  }
}

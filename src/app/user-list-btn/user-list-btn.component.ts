import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-btn',
  templateUrl: './user-list-btn.component.html',
  styleUrls: ['./user-list-btn.component.css']
})
export class UserListBtnComponent {
  @Input() name: string;
  @Input() indexUser: number;
  @Input() flag: boolean = false;
  listButtonsData = [
    {
      name: 'Удалить последнего пользователя',
      func: () => {
        const len: number = this.usersService.users.length;
        if (len > 0) {
          this.usersService.deleteUser(len - 1);
        }
      }
  },
    {
      name: 'отменить',
      func: () => {
        this.usersService.cancelDelete();
      }
  },
    {
      name: 'удалить',
      func: () => {
        this.usersService.deleteUser(this.indexUser);
      }
    },
    {
      name: 'изменить',
      func: () => {
        this.usersService.editUser(this.indexUser);
      }
    }
  ];

  constructor(private usersService: UsersService) {
  }

  funcBtn() {
    this.listButtonsData.forEach((dataObj) => {
      if (dataObj.name === this.name) {
        dataObj.func();
      }
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {User} from '../shared/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  card: User;

  constructor(private usersService: UsersService) {
  }

  ngOnInit () {
    this.usersService.currentUser.subscribe((val) => {
      this.card = val;
    });
  }

}

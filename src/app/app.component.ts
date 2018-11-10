import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { UsersService } from './users.service';
import {User} from './shared/user.model';
import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];
  lastDelete: User[];
  @ViewChild('button') button: ElementRef;
  // count;
  constructor(private usersService: UsersService) {
      this.users = usersService.users;
      this.lastDelete = usersService.lastDelete;
  }

  ngOnInit() {
    this.usersService.changeForm = new Subject<boolean>();
    /* this.usersService.currentUser.subscribe((val) => {
      this.usersService.CopyCurrentUser = val;

    }); */

    
  }
}

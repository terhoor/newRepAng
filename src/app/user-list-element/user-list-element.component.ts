import { Component, Input, OnInit } from '@angular/core';
import {User} from '../shared/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user-list-element.component.html',
  styleUrls: ['./user-list-element.component.css']
})
export class UserListElementComponent {
    @Input() user: User;

}

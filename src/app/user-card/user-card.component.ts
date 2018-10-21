import { Component, OnInit, Input } from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
    @Input() card: User;

}

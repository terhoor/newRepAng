import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
    @Input() user: User;
    @Output() userChange: EventEmitter<User> = new EventEmitter();

    onClick() {
        this.userChange.emit(this.user);
    }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
    @Input() user: User;
    @Input() changeForm: boolean;

    @Output() userChange: EventEmitter<User> = new EventEmitter();
    @Output() userSave: EventEmitter<User> = new EventEmitter();

    onClick() {
        this.userChange.emit(this.user);
    }

    onSave() {
        this.userSave.emit();
    }
}

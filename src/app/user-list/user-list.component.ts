import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']

})
export class UserListComponent {
    @Input() users: User[] = [];
    @Output() deleteChange: EventEmitter<number> = new EventEmitter();
    @Output() cancelChange: EventEmitter<void> = new EventEmitter();
    @Output() editChange: EventEmitter<number> = new EventEmitter();


    onDelete(num: number) {
        this.deleteChange.emit(num);
    }

    onEdit(num: number) {
        this.editChange.emit(num);
    }

    onCancel() {
        this.cancelChange.emit();
    }

}

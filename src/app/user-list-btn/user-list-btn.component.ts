import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
// import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-btn',
  templateUrl: './user-list-btn.component.html',
  styleUrls: ['./user-list-btn.component.css']
})
export class UserListBtnComponent {
    @Input() countUsers: number;
    @Input() name: string;
    @Input() indexUser: number;
    @Output() deleteChange: EventEmitter<number> = new EventEmitter();
    @Output() cancelChange: EventEmitter<void> = new EventEmitter();
    @Output() editChange: EventEmitter<number> = new EventEmitter();

    constructor() { }
    onDelLast() {
        const len: number = this.countUsers;
        if (len > 0) {
            this.deleteChange.emit(len - 1);
        }
    }

    onDel() {
        this.deleteChange.emit(this.indexUser);
    }

    onEdit() {
        this.editChange.emit(this.indexUser);
    }

    onCancel() {
        this.cancelChange.emit();
    }
}

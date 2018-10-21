import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    public clickCount = 0;
    public creationDate: Date = new Date();
    public increase() {
        this.clickCount++;
    }

    constructor() { }

    public getUsers(): Array<any> {
        return [
        {firstName: 'Ivan', lastName: 'Ivanov'},
        {firstName: 'Petr', lastName: 'Petrov'},
        {firstName: 'Vasya', lastName: 'Redko'}
        ];
    }
}

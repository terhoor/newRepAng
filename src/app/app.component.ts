import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = ' my-app!';
  birthDay: Date = new Date();
  users: Array<any> = [{
    firstName: 'Ivan', lastName: 'Ivanov'},
    {firstName: 'Petr', lastName: 'Petrov'},
    {firstName: 'Vasya', lastName: 'Vasyily'},
  ];

  onButtinClicked() {
    this.title = 'button clicked';
  }
}

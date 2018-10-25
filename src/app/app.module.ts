import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListElementComponent } from './user-list-element/user-list-element.component';
import { UserListBtnComponent } from './user-list-btn/user-list-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    UserFormComponent,
    UserListElementComponent,
    UserListBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

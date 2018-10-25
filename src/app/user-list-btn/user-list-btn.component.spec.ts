import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListBtnComponent } from './user-list-btn.component';

describe('UserListBtnComponent', () => {
  let component: UserListBtnComponent;
  let fixture: ComponentFixture<UserListBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

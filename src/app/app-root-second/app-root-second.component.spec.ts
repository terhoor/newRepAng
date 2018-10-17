import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRootSecondComponent } from './app-root-second.component';

describe('AppRootSecondComponent', () => {
  let component: AppRootSecondComponent;
  let fixture: ComponentFixture<AppRootSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRootSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRootSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

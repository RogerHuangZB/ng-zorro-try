import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManage } from './user-manage.component';

describe('UserManageComponent', () => {
  let component: UserManage;
  let fixture: ComponentFixture<UserManage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

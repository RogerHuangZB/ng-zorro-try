import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcTypeManageComponent } from './jc-type-manage.component';

describe('JcTypeManageComponent', () => {
  let component: JcTypeManageComponent;
  let fixture: ComponentFixture<JcTypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcTypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcTypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcManageComponent } from './jc-manage.component';

describe('JcManageComponent', () => {
  let component: JcManageComponent;
  let fixture: ComponentFixture<JcManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

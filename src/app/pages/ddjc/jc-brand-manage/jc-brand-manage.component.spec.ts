import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcBrandManageComponent } from './jc-brand-manage.component';

describe('JcBrandManageComponent', () => {
  let component: JcBrandManageComponent;
  let fixture: ComponentFixture<JcBrandManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcBrandManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcBrandManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

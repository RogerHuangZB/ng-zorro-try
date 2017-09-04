import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabbar } from './tabbar.component';

describe('TabbarComponent', () => {
  let component: Tabbar;
  let fixture: ComponentFixture<Tabbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabbar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

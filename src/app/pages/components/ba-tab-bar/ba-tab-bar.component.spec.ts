import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaTabBarComponent } from './ba-tab-bar.component';

describe('BaTabBarComponent', () => {
  let component: BaTabBarComponent;
  let fixture: ComponentFixture<BaTabBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaTabBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

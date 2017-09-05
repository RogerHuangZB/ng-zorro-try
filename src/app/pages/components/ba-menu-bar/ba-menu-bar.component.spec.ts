import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaMenuBarComponent } from './ba-menu-bar.component';

describe('BaMenuBarComponent', () => {
  let component: BaMenuBarComponent;
  let fixture: ComponentFixture<BaMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pages } from './pages.component';

describe('PagesComponent', () => {
  let component: Pages;
  let fixture: ComponentFixture<Pages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

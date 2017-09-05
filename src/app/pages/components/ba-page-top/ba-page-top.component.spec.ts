import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaPageTopComponent } from './ba-page-top.component';

describe('BaPageTopComponent', () => {
  let component: BaPageTopComponent;
  let fixture: ComponentFixture<BaPageTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaPageTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaPageTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

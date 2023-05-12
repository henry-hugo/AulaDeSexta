import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForex1Component } from './ng-forex1.component';

describe('NgForex1Component', () => {
  let component: NgForex1Component;
  let fixture: ComponentFixture<NgForex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForex1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

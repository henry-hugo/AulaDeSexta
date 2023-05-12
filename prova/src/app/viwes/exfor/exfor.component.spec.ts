import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExforComponent } from './exfor.component';

describe('ExforComponent', () => {
  let component: ExforComponent;
  let fixture: ComponentFixture<ExforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboultComponent } from './aboult.component';

describe('AboultComponent', () => {
  let component: AboultComponent;
  let fixture: ComponentFixture<AboultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

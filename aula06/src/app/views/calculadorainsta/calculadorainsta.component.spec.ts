import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadorainstaComponent } from './calculadorainsta.component';

describe('CalculadorainstaComponent', () => {
  let component: CalculadorainstaComponent;
  let fixture: ComponentFixture<CalculadorainstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadorainstaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadorainstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

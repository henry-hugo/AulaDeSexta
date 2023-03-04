import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaisComponent } from './color-pais.component';

describe('ColorPaisComponent', () => {
  let component: ColorPaisComponent;
  let fixture: ComponentFixture<ColorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

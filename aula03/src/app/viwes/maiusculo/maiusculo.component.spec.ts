import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiusculoComponent } from './maiusculo.component';

describe('MaiusculoComponent', () => {
  let component: MaiusculoComponent;
  let fixture: ComponentFixture<MaiusculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaiusculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaiusculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

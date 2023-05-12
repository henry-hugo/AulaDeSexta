import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparecerEsumirComponent } from './aparecer-esumir.component';

describe('AparecerEsumirComponent', () => {
  let component: AparecerEsumirComponent;
  let fixture: ComponentFixture<AparecerEsumirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AparecerEsumirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparecerEsumirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

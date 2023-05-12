import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExbindingComponent } from './exbinding.component';

describe('ExbindingComponent', () => {
  let component: ExbindingComponent;
  let fixture: ComponentFixture<ExbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

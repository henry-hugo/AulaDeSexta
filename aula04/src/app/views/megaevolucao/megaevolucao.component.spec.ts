import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaevolucaoComponent } from './megaevolucao.component';

describe('MegaevolucaoComponent', () => {
  let component: MegaevolucaoComponent;
  let fixture: ComponentFixture<MegaevolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaevolucaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaevolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

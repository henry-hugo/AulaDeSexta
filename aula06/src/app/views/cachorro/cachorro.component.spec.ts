import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachorroComponent } from './cachorro.component';

describe('CachorroComponent', () => {
  let component: CachorroComponent;
  let fixture: ComponentFixture<CachorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachorroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

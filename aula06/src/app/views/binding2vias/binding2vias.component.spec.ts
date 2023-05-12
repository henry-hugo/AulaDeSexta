import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binding2viasComponent } from './binding2vias.component';

describe('Binding2viasComponent', () => {
  let component: Binding2viasComponent;
  let fixture: ComponentFixture<Binding2viasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binding2viasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Binding2viasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

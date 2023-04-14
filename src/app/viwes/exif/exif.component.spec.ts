import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExifComponent } from './exif.component';

describe('ExifComponent', () => {
  let component: ExifComponent;
  let fixture: ComponentFixture<ExifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

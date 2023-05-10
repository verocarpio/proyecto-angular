import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremiEdicionComponent } from './sobremi-edicion.component';

describe('SobremiEdicionComponent', () => {
  let component: SobremiEdicionComponent;
  let fixture: ComponentFixture<SobremiEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremiEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremiEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

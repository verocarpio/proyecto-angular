import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoargProgramaComponent } from './logoarg-programa.component';

describe('LogoargProgramaComponent', () => {
  let component: LogoargProgramaComponent;
  let fixture: ComponentFixture<LogoargProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoargProgramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoargProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

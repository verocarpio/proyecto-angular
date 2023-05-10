import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionSobreMiComponent } from './edicion-sobre-mi.component';

describe('EdicionSobreMiComponent', () => {
  let component: EdicionSobreMiComponent;
  let fixture: ComponentFixture<EdicionSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

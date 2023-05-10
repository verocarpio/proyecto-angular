import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesvComponent } from './redesv.component';

describe('RedesvComponent', () => {
  let component: RedesvComponent;
  let fixture: ComponentFixture<RedesvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

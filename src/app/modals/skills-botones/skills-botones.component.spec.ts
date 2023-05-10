import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBotonesComponent } from './skills-botones.component';

describe('SkillsBotonesComponent', () => {
  let component: SkillsBotonesComponent;
  let fixture: ComponentFixture<SkillsBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsBotonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

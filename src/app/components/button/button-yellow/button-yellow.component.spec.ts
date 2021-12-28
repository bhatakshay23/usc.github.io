import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonYellowComponent } from './button-yellow.component';

describe('ButtonYellowComponent', () => {
  let component: ButtonYellowComponent;
  let fixture: ComponentFixture<ButtonYellowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonYellowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

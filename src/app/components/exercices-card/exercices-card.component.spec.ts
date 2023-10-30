import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicesCardComponent } from './exercices-card.component';

describe('ExercicesCardComponent', () => {
  let component: ExercicesCardComponent;
  let fixture: ComponentFixture<ExercicesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercicesCardComponent]
    });
    fixture = TestBed.createComponent(ExercicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

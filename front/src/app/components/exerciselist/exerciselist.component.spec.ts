import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciselistComponent } from './exerciselist.component';

describe('ExerciselistComponent', () => {
  let component: ExerciselistComponent;
  let fixture: ComponentFixture<ExerciselistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciselistComponent]
    });
    fixture = TestBed.createComponent(ExerciselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

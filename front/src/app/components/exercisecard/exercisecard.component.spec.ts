import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisecardComponent } from './exercisecard.component';

describe('ExercisecardComponent', () => {
  let component: ExercisecardComponent;
  let fixture: ComponentFixture<ExercisecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercisecardComponent]
    });
    fixture = TestBed.createComponent(ExercisecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

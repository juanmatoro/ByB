import { TestBed } from '@angular/core/testing';

import { ExerciseCartService } from './exercise-cart.service';

describe('ExerciseCartService', () => {
  let service: ExerciseCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinelistComponent } from './routinelist.component';

describe('RoutinelistComponent', () => {
  let component: RoutinelistComponent;
  let fixture: ComponentFixture<RoutinelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutinelistComponent]
    });
    fixture = TestBed.createComponent(RoutinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIconsComponent } from './menu-icons.component';

describe('MenuIconsComponent', () => {
  let component: MenuIconsComponent;
  let fixture: ComponentFixture<MenuIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuIconsComponent]
    });
    fixture = TestBed.createComponent(MenuIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOrganicFoodComponent } from './ui-organic-food.component';

describe('UiOrganicFoodComponent', () => {
  let component: UiOrganicFoodComponent;
  let fixture: ComponentFixture<UiOrganicFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiOrganicFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiOrganicFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

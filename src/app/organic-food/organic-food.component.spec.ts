import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicFoodComponent } from './organic-food.component';

describe('OrganicFoodComponent', () => {
  let component: OrganicFoodComponent;
  let fixture: ComponentFixture<OrganicFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

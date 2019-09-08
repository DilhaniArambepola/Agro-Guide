import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicFoodSellerComponent } from './organic-food-seller.component';

describe('OrganicFoodSellerComponent', () => {
  let component: OrganicFoodSellerComponent;
  let fixture: ComponentFixture<OrganicFoodSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicFoodSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicFoodSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

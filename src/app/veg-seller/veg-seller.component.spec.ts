import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegSellerComponent } from './veg-seller.component';

describe('VegSellerComponent', () => {
  let component: VegSellerComponent;
  let fixture: ComponentFixture<VegSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

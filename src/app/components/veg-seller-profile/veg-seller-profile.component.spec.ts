import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegSellerProfileComponent } from './veg-seller-profile.component';

describe('VegSellerProfileComponent', () => {
  let component: VegSellerProfileComponent;
  let fixture: ComponentFixture<VegSellerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegSellerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegSellerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

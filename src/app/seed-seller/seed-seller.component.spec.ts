import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedSellerComponent } from './seed-seller.component';

describe('SeedSellerComponent', () => {
  let component: SeedSellerComponent;
  let fixture: ComponentFixture<SeedSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

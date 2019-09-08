import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedSellerProfileComponent } from './seed-seller-profile.component';

describe('SeedSellerProfileComponent', () => {
  let component: SeedSellerProfileComponent;
  let fixture: ComponentFixture<SeedSellerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedSellerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedSellerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

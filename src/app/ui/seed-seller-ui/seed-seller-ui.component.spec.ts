import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedSellerUiComponent } from './seed-seller-ui.component';

describe('SeedSellerUiComponent', () => {
  let component: SeedSellerUiComponent;
  let fixture: ComponentFixture<SeedSellerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedSellerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedSellerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

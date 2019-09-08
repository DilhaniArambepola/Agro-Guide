import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegSellerUiComponent } from './veg-seller-ui.component';

describe('VegSellerUiComponent', () => {
  let component: VegSellerUiComponent;
  let fixture: ComponentFixture<VegSellerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegSellerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegSellerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerUIHomeComponent } from './farmer-ui-home.component';

describe('FarmerUIHomeComponent', () => {
  let component: FarmerUIHomeComponent;
  let fixture: ComponentFixture<FarmerUIHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerUIHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerUIHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

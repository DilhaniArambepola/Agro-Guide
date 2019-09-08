import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerHomeComponentComponent } from './farmer-home-component.component';

describe('FarmerHomeComponentComponent', () => {
  let component: FarmerHomeComponentComponent;
  let fixture: ComponentFixture<FarmerHomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerHomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

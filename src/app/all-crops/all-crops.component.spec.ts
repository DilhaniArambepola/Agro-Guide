import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCropsComponent } from './all-crops.component';

describe('AllCropsComponent', () => {
  let component: AllCropsComponent;
  let fixture: ComponentFixture<AllCropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

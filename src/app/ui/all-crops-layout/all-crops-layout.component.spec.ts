import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCropsLayoutComponent } from './all-crops-layout.component';

describe('AllCropsLayoutComponent', () => {
  let component: AllCropsLayoutComponent;
  let fixture: ComponentFixture<AllCropsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCropsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCropsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

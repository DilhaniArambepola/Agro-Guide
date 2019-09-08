import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCropDiseaseLayoutComponent } from './admin-crop-disease-layout.component';

describe('AdminCropDiseaseLayoutComponent', () => {
  let component: AdminCropDiseaseLayoutComponent;
  let fixture: ComponentFixture<AdminCropDiseaseLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCropDiseaseLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCropDiseaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

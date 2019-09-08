import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCropDiseaseComponent } from './admin-crop-disease.component';

describe('AdminCropDiseaseComponent', () => {
  let component: AdminCropDiseaseComponent;
  let fixture: ComponentFixture<AdminCropDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCropDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCropDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

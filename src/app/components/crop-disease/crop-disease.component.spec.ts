import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropDiseaseComponent } from './crop-disease.component';

describe('CropDiseaseComponent', () => {
  let component: CropDiseaseComponent;
  let fixture: ComponentFixture<CropDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

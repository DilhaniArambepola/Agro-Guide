import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCropsLayoutComponent } from './admin-add-crops-layout.component';

describe('AdminAddCropsLayoutComponent', () => {
  let component: AdminAddCropsLayoutComponent;
  let fixture: ComponentFixture<AdminAddCropsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddCropsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCropsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

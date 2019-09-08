import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageCropsComponent } from './admin-manage-crops.component';

describe('AdminManageCropsComponent', () => {
  let component: AdminManageCropsComponent;
  let fixture: ComponentFixture<AdminManageCropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageCropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

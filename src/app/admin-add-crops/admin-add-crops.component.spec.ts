import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCropsComponent } from './admin-add-crops.component';

describe('AdminAddCropsComponent', () => {
  let component: AdminAddCropsComponent;
  let fixture: ComponentFixture<AdminAddCropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddCropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardUiComponent } from './admin-dashboard-ui.component';

describe('AdminDashboardUiComponent', () => {
  let component: AdminDashboardUiComponent;
  let fixture: ComponentFixture<AdminDashboardUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

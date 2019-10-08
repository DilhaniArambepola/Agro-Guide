import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAdminContactComponent } from './ui-admin-contact.component';

describe('UiAdminContactComponent', () => {
  let component: UiAdminContactComponent;
  let fixture: ComponentFixture<UiAdminContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiAdminContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAdminContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

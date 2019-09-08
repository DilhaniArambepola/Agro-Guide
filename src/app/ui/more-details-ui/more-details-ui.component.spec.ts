import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailsUiComponent } from './more-details-ui.component';

describe('MoreDetailsUiComponent', () => {
  let component: MoreDetailsUiComponent;
  let fixture: ComponentFixture<MoreDetailsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDetailsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDetailsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

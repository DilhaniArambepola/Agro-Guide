import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFertilizerComponent } from './ui-fertilizer.component';

describe('UiFertilizerComponent', () => {
  let component: UiFertilizerComponent;
  let fixture: ComponentFixture<UiFertilizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFertilizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

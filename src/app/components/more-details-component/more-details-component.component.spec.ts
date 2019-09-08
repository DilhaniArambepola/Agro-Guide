import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailsComponentComponent } from './more-details-component.component';

describe('MoreDetailsComponentComponent', () => {
  let component: MoreDetailsComponentComponent;
  let fixture: ComponentFixture<MoreDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

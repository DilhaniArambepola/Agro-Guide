import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivateComponent } from './cultivate.component';

describe('CultivateComponent', () => {
  let component: CultivateComponent;
  let fixture: ComponentFixture<CultivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCultivateComponent } from './ui-cultivate.component';

describe('UiCultivateComponent', () => {
  let component: UiCultivateComponent;
  let fixture: ComponentFixture<UiCultivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCultivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCultivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

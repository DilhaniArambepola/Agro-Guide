import { inject, async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivateVegetablesComponent } from './cultivate-vegetables.component';
import {} from 'jasmine';

describe('CultivateVegetablesComponent', () => {
  let component: CultivateVegetablesComponent;
  let fixture: ComponentFixture<CultivateVegetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivateVegetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultivateVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if specified crops are in the getCrops function', () => {
    const crops = component.getCrops();
    expect(crops).toContain([]);
  });

});

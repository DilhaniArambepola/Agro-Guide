import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeFertilizerComponent } from './make-fertilizer.component';

describe('MakeFertilizerComponent', () => {
  let component: MakeFertilizerComponent;
  let fixture: ComponentFixture<MakeFertilizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeFertilizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeFertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

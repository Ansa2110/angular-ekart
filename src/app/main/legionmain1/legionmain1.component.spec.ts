import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Legionmain1Component } from './legionmain1.component';

describe('Legionmain1Component', () => {
  let component: Legionmain1Component;
  let fixture: ComponentFixture<Legionmain1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Legionmain1Component]
    });
    fixture = TestBed.createComponent(Legionmain1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

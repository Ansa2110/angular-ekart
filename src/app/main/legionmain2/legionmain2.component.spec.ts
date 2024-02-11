import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Legionmain2Component } from './legionmain2.component';

describe('Legionmain2Component', () => {
  let component: Legionmain2Component;
  let fixture: ComponentFixture<Legionmain2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Legionmain2Component]
    });
    fixture = TestBed.createComponent(Legionmain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

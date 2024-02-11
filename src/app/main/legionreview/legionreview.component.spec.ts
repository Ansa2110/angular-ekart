import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionreviewComponent } from './legionreview.component';

describe('LegionreviewComponent', () => {
  let component: LegionreviewComponent;
  let fixture: ComponentFixture<LegionreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegionreviewComponent]
    });
    fixture = TestBed.createComponent(LegionreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

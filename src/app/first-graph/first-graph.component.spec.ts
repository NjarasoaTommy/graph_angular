import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGraphComponent } from './first-graph.component';

describe('FirstGraphComponent', () => {
  let component: FirstGraphComponent;
  let fixture: ComponentFixture<FirstGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

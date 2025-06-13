import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordMinComponent } from './ford-min.component';

describe('FordMinComponent', () => {
  let component: FordMinComponent;
  let fixture: ComponentFixture<FordMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FordMinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FordMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

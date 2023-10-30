import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsCardComponent } from './contents-card.component';

describe('ContentsCardComponent', () => {
  let component: ContentsCardComponent;
  let fixture: ComponentFixture<ContentsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentsCardComponent]
    });
    fixture = TestBed.createComponent(ContentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

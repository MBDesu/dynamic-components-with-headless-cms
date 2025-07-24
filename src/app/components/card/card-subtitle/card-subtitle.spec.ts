import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubtitle } from './card-subtitle';

describe('CardSubtitle', () => {
  let component: CardSubtitle;
  let fixture: ComponentFixture<CardSubtitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSubtitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSubtitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

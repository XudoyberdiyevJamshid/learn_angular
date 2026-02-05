import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCart } from './new-cart';

describe('NewCart', () => {
  let component: NewCart;
  let fixture: ComponentFixture<NewCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

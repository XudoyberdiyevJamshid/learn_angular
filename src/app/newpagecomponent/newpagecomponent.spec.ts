import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newpagecomponent } from './newpagecomponent';

describe('Newpagecomponent', () => {
  let component: Newpagecomponent;
  let fixture: ComponentFixture<Newpagecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newpagecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newpagecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

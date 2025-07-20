import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePlaces } from './available-places';

describe('AvailablePlaces', () => {
  let component: AvailablePlaces;
  let fixture: ComponentFixture<AvailablePlaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailablePlaces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablePlaces);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesContainer } from './places-container';

describe('PlacesContainer', () => {
  let component: PlacesContainer;
  let fixture: ComponentFixture<PlacesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacesContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

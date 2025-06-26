import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStatus } from './server-status';

describe('ServerStatus', () => {
  let component: ServerStatus;
  let fixture: ComponentFixture<ServerStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

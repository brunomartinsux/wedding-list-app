import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGuestListComponent } from './main-guest-list.component';

describe('MainGuestListComponent', () => {
  let component: MainGuestListComponent;
  let fixture: ComponentFixture<MainGuestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGuestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGuestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

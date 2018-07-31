import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestInstructionsComponent } from './user-test-instructions.component';

describe('UserTestInstructionsComponent', () => {
  let component: UserTestInstructionsComponent;
  let fixture: ComponentFixture<UserTestInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTestInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTestInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

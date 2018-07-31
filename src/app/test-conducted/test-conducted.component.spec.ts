import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestConductedComponent } from './test-conducted.component';

describe('TestConductedComponent', () => {
  let component: TestConductedComponent;
  let fixture: ComponentFixture<TestConductedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestConductedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestConductedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

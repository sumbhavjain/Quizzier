import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCompanyDetailsComponent } from './web-company-details.component';

describe('WebCompanyDetailsComponent', () => {
  let component: WebCompanyDetailsComponent;
  let fixture: ComponentFixture<WebCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaleComponent } from './cale.component';

describe('CaleComponent', () => {
  let component: CaleComponent;
  let fixture: ComponentFixture<CaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

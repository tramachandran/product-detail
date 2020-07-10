import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatDetailComponent } from './bat-detail.component';

describe('BatDetailComponent', () => {
  let component: BatDetailComponent;
  let fixture: ComponentFixture<BatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

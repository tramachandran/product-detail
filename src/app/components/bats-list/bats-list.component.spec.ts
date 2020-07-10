import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatsListComponent } from './bats-list.component';

describe('BatsListComponent', () => {
  let component: BatsListComponent;
  let fixture: ComponentFixture<BatsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

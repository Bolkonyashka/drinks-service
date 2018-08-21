import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkItemsComponent } from './drink-items.component';

describe('DrinkItemsComponent', () => {
  let component: DrinkItemsComponent;
  let fixture: ComponentFixture<DrinkItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

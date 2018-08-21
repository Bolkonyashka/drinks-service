import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingBlockComponent } from './vending-block.component';

describe('VendingBlockComponent', () => {
  let component: VendingBlockComponent;
  let fixture: ComponentFixture<VendingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

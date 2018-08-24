import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrinksBlockComponent } from './edit-drinks-block.component';

describe('EditDrinksBlockComponent', () => {
  let component: EditDrinksBlockComponent;
  let fixture: ComponentFixture<EditDrinksBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDrinksBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDrinksBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigBlockComponent } from './config-block.component';

describe('ConfigBlockComponent', () => {
  let component: ConfigBlockComponent;
  let fixture: ComponentFixture<ConfigBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

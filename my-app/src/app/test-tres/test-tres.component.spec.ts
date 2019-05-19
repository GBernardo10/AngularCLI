import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTresComponent } from './test-tres.component';

describe('TestTresComponent', () => {
  let component: TestTresComponent;
  let fixture: ComponentFixture<TestTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutaDashboardComponent } from './routa-dashboard.component';

describe('RoutaDashboardComponent', () => {
  let component: RoutaDashboardComponent;
  let fixture: ComponentFixture<RoutaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

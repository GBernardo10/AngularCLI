import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEventoComponent } from './visualizar-evento.component';

describe('VisualizarEventoComponent', () => {
  let component: VisualizarEventoComponent;
  let fixture: ComponentFixture<VisualizarEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

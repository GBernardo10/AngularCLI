import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregarUsuarioComponent } from './carregar-usuario.component';

describe('CarregarUsuarioComponent', () => {
  let component: CarregarUsuarioComponent;
  let fixture: ComponentFixture<CarregarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarregarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarregarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEspecialidadComponent } from './listar-especialidad.component';

describe('ListarEspecialidadComponent', () => {
  let component: ListarEspecialidadComponent;
  let fixture: ComponentFixture<ListarEspecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEspecialidadComponent]
    });
    fixture = TestBed.createComponent(ListarEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
